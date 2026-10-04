create type public.app_role as enum ('admin','user');
create table public.user_roles (id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null, role app_role not null, unique(user_id, role));
grant select on public.user_roles to authenticated; grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create or replace function public.has_role(_user_id uuid, _role app_role) returns boolean language sql stable security definer set search_path=public as $$ select exists(select 1 from public.user_roles where user_id=_user_id and role=_role) $$;
create policy "own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create table public.seo_overrides (path text primary key, title text, description text, h1 text, intro text, faqs jsonb not null default '[]', links jsonb not null default '[]', active boolean not null default true, last_changed_at timestamptz, updated_at timestamptz not null default now());
grant select on public.seo_overrides to anon, authenticated; grant all on public.seo_overrides to service_role;
alter table public.seo_overrides enable row level security;
create policy "public read active" on public.seo_overrides for select to anon, authenticated using (active);

create table public.seo_changes (id uuid primary key default gen_random_uuid(), path text not null, field text not null, old_value jsonb, new_value jsonb, reason text, metrics_before jsonb, metrics_after jsonb, status text not null default 'applied', created_at timestamptz not null default now());
create table public.seo_daily_metrics (id uuid primary key default gen_random_uuid(), day date not null, page text not null, query text not null default '', clicks int not null default 0, impressions int not null default 0, ctr numeric not null default 0, position numeric not null default 0, unique(day,page,query));
create table public.seo_keywords (keyword text primary key, volume int, difficulty numeric, our_position numeric, target_path text, updated_at timestamptz not null default now());
create table public.seo_competitors (id uuid primary key default gen_random_uuid(), day date not null default current_date, keyword text not null, domain text not null, url text, position int, unique(day,keyword,domain));
create table public.seo_suggestions (id uuid primary key default gen_random_uuid(), kind text not null, title text not null, details text, created_at timestamptz not null default now());
create table public.seo_job_runs (id uuid primary key default gen_random_uuid(), started_at timestamptz not null default now(), finished_at timestamptz, status text not null default 'running', summary text, error text);

do $$ declare t text; begin foreach t in array array['seo_changes','seo_daily_metrics','seo_keywords','seo_competitors','seo_suggestions','seo_job_runs'] loop
 execute format('grant select, update on public.%I to authenticated; grant all on public.%I to service_role; alter table public.%I enable row level security; create policy "admin all" on public.%I for all to authenticated using (public.has_role(auth.uid(),''admin'')) with check (public.has_role(auth.uid(),''admin''));', t,t,t,t);
end loop; end $$;
grant update on public.seo_overrides to authenticated;
create policy "admin read all" on public.seo_overrides for select to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "admin update" on public.seo_overrides for update to authenticated using (public.has_role(auth.uid(),'admin'));
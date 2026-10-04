create table public.seo_settings (id int primary key default 1, cron_token text not null default encode(gen_random_bytes(32),'hex'), paused_reason text);
grant all on public.seo_settings to service_role;
alter table public.seo_settings enable row level security;
insert into public.seo_settings (id) values (1);
create extension if not exists pg_cron; create extension if not exists pg_net;
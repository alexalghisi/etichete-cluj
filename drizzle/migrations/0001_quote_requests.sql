CREATE TABLE public.quote_requests (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), created_at timestamptz NOT NULL DEFAULT now(), name text NOT NULL, company text NOT NULL DEFAULT '', email text NOT NULL, phone text NOT NULL, configuration jsonb NOT NULL, logo_path text, handled boolean NOT NULL DEFAULT false, notification_status text NOT NULL DEFAULT 'pending');
GRANT SELECT, UPDATE, DELETE ON public.quote_requests TO authenticated;
GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins manage quotes" ON public.quote_requests FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins read quote logos" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'quote-logos' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete quote logos" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'quote-logos' AND public.has_role(auth.uid(), 'admin'));
ALTER TABLE public.blog_posts ADD COLUMN content_updated_at timestamptz;
COMMENT ON COLUMN public.blog_posts.content_updated_at IS 'Authoritative timestamp of significant article changes; NULL for legacy articles with unknown modification history.';
CREATE OR REPLACE FUNCTION public.track_blog_content_modification() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF ROW(NEW.slug, NEW.title, NEW.meta_description, NEW.excerpt, NEW.content, NEW.published) IS DISTINCT FROM ROW(OLD.slug, OLD.title, OLD.meta_description, OLD.excerpt, OLD.content, OLD.published) THEN
    NEW.content_updated_at := statement_timestamp();
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER blog_content_modification BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.track_blog_content_modification();
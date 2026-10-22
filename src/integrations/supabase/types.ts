export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          content: string
          content_updated_at: string | null
          created_at: string
          excerpt: string
          id: string
          keyword: string | null
          meta_description: string
          published: boolean
          published_at: string
          slug: string
          title: string
        }
        Insert: {
          content: string
          content_updated_at?: string | null
          created_at?: string
          excerpt: string
          id?: string
          keyword?: string | null
          meta_description: string
          published?: boolean
          published_at?: string
          slug: string
          title: string
        }
        Update: {
          content?: string
          content_updated_at?: string | null
          created_at?: string
          excerpt?: string
          id?: string
          keyword?: string | null
          meta_description?: string
          published?: boolean
          published_at?: string
          slug?: string
          title?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          handled: boolean
          id: string
          message: string
          name: string
          page: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string
          email: string
          handled?: boolean
          id?: string
          message: string
          name: string
          page?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          handled?: boolean
          id?: string
          message?: string
          name?: string
          page?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      quote_requests: {
        Row: {
          company: string
          configuration: Json
          created_at: string
          email: string
          handled: boolean
          id: string
          logo_path: string | null
          name: string
          notification_status: string
          phone: string
        }
        Insert: {
          company?: string
          configuration: Json
          created_at?: string
          email: string
          handled?: boolean
          id?: string
          logo_path?: string | null
          name: string
          notification_status?: string
          phone: string
        }
        Update: {
          company?: string
          configuration?: Json
          created_at?: string
          email?: string
          handled?: boolean
          id?: string
          logo_path?: string | null
          name?: string
          notification_status?: string
          phone?: string
        }
        Relationships: []
      }
      seo_changes: {
        Row: {
          created_at: string
          field: string
          id: string
          metrics_after: Json | null
          metrics_before: Json | null
          new_value: Json | null
          old_value: Json | null
          path: string
          reason: string | null
          status: string
        }
        Insert: {
          created_at?: string
          field: string
          id?: string
          metrics_after?: Json | null
          metrics_before?: Json | null
          new_value?: Json | null
          old_value?: Json | null
          path: string
          reason?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          field?: string
          id?: string
          metrics_after?: Json | null
          metrics_before?: Json | null
          new_value?: Json | null
          old_value?: Json | null
          path?: string
          reason?: string | null
          status?: string
        }
        Relationships: []
      }
      seo_competitors: {
        Row: {
          day: string
          domain: string
          id: string
          keyword: string
          position: number | null
          url: string | null
        }
        Insert: {
          day?: string
          domain: string
          id?: string
          keyword: string
          position?: number | null
          url?: string | null
        }
        Update: {
          day?: string
          domain?: string
          id?: string
          keyword?: string
          position?: number | null
          url?: string | null
        }
        Relationships: []
      }
      seo_daily_metrics: {
        Row: {
          clicks: number
          ctr: number
          day: string
          id: string
          impressions: number
          page: string
          position: number
          query: string
        }
        Insert: {
          clicks?: number
          ctr?: number
          day: string
          id?: string
          impressions?: number
          page: string
          position?: number
          query?: string
        }
        Update: {
          clicks?: number
          ctr?: number
          day?: string
          id?: string
          impressions?: number
          page?: string
          position?: number
          query?: string
        }
        Relationships: []
      }
      seo_job_runs: {
        Row: {
          error: string | null
          finished_at: string | null
          id: string
          started_at: string
          status: string
          summary: string | null
        }
        Insert: {
          error?: string | null
          finished_at?: string | null
          id?: string
          started_at?: string
          status?: string
          summary?: string | null
        }
        Update: {
          error?: string | null
          finished_at?: string | null
          id?: string
          started_at?: string
          status?: string
          summary?: string | null
        }
        Relationships: []
      }
      seo_keywords: {
        Row: {
          difficulty: number | null
          keyword: string
          our_position: number | null
          target_path: string | null
          updated_at: string
          volume: number | null
        }
        Insert: {
          difficulty?: number | null
          keyword: string
          our_position?: number | null
          target_path?: string | null
          updated_at?: string
          volume?: number | null
        }
        Update: {
          difficulty?: number | null
          keyword?: string
          our_position?: number | null
          target_path?: string | null
          updated_at?: string
          volume?: number | null
        }
        Relationships: []
      }
      seo_overrides: {
        Row: {
          active: boolean
          description: string | null
          faqs: Json
          h1: string | null
          intro: string | null
          last_changed_at: string | null
          links: Json
          path: string
          title: string | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          description?: string | null
          faqs?: Json
          h1?: string | null
          intro?: string | null
          last_changed_at?: string | null
          links?: Json
          path: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          description?: string | null
          faqs?: Json
          h1?: string | null
          intro?: string | null
          last_changed_at?: string | null
          links?: Json
          path?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      seo_settings: {
        Row: {
          cron_token: string
          id: number
          paused_reason: string | null
        }
        Insert: {
          cron_token?: string
          id?: number
          paused_reason?: string | null
        }
        Update: {
          cron_token?: string
          id?: number
          paused_reason?: string | null
        }
        Relationships: []
      }
      seo_suggestions: {
        Row: {
          created_at: string
          details: string | null
          id: string
          kind: string
          title: string
        }
        Insert: {
          created_at?: string
          details?: string | null
          id?: string
          kind: string
          title: string
        }
        Update: {
          created_at?: string
          details?: string | null
          id?: string
          kind?: string
          title?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const

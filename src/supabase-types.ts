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
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      _schedule_parent_remap_audit: {
        Row: {
          entity: string
          entity_id: string
          id: string
          new_parent_id: string | null
          old_parent_id: string | null
          remapped_at: string
        }
        Insert: {
          entity: string
          entity_id: string
          id?: string
          new_parent_id?: string | null
          old_parent_id?: string | null
          remapped_at?: string
        }
        Update: {
          entity?: string
          entity_id?: string
          id?: string
          new_parent_id?: string | null
          old_parent_id?: string | null
          remapped_at?: string
        }
        Relationships: []
      }
      _technical_note_conversion_audit: {
        Row: {
          converted_at: string
          id: string
          legacy_item_id: string
          new_item_id: string
          new_row_id: string
          note_text: string | null
        }
        Insert: {
          converted_at?: string
          id?: string
          legacy_item_id: string
          new_item_id: string
          new_row_id: string
          note_text?: string | null
        }
        Update: {
          converted_at?: string
          id?: string
          legacy_item_id?: string
          new_item_id?: string
          new_row_id?: string
          note_text?: string | null
        }
        Relationships: []
      }
      ai_action_runs: {
        Row: {
          action_module: string
          action_type: string
          checks_performed: Json | null
          company_id: string
          completed_at: string | null
          confirmation_state: string
          created_at: string
          id: string
          message_id: string | null
          parsed_intent: Json | null
          project_id: string
          request_summary: string | null
          result_summary: Json | null
          session_id: string
          user_id: string
          version_impact: Json | null
        }
        Insert: {
          action_module: string
          action_type: string
          checks_performed?: Json | null
          company_id: string
          completed_at?: string | null
          confirmation_state?: string
          created_at?: string
          id?: string
          message_id?: string | null
          parsed_intent?: Json | null
          project_id: string
          request_summary?: string | null
          result_summary?: Json | null
          session_id: string
          user_id: string
          version_impact?: Json | null
        }
        Update: {
          action_module?: string
          action_type?: string
          checks_performed?: Json | null
          company_id?: string
          completed_at?: string | null
          confirmation_state?: string
          created_at?: string
          id?: string
          message_id?: string | null
          parsed_intent?: Json | null
          project_id?: string
          request_summary?: string | null
          result_summary?: Json | null
          session_id?: string
          user_id?: string
          version_impact?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_action_runs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_action_runs_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_action_runs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_action_runs_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_action_runs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          metadata: Json | null
          role: string
          session_id: string
          tool_calls: Json | null
        }
        Insert: {
          content?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role: string
          session_id: string
          tool_calls?: Json | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role?: string
          session_id?: string
          tool_calls?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_chat_sessions: {
        Row: {
          company_id: string
          created_at: string
          id: string
          project_id: string
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          project_id: string
          status?: string
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          project_id?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_chat_sessions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_chat_sessions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_chat_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_clarification_events: {
        Row: {
          created_at: string
          id: string
          message_id: string | null
          reason: string
          resolved: boolean
          session_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message_id?: string | null
          reason: string
          resolved?: boolean
          session_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message_id?: string | null
          reason?: string
          resolved?: boolean
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_clarification_events_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_clarification_events_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "ai_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_suggestion_patterns: {
        Row: {
          check_description: string
          check_module: string
          created_at: string
          id: string
          is_enabled: boolean
          priority: number
          suggestion_template: string
          trigger_action: string
          updated_at: string
        }
        Insert: {
          check_description: string
          check_module: string
          created_at?: string
          id?: string
          is_enabled?: boolean
          priority?: number
          suggestion_template: string
          trigger_action: string
          updated_at?: string
        }
        Update: {
          check_description?: string
          check_module?: string
          created_at?: string
          id?: string
          is_enabled?: boolean
          priority?: number
          suggestion_template?: string
          trigger_action?: string
          updated_at?: string
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          actor_id: string
          actor_type: Database["public"]["Enums"]["actor_type"]
          change_summary: Json | null
          company_id: string | null
          device_info: string | null
          event_type: string
          id: string
          ip_address: unknown
          project_id: string | null
          target_id: string
          target_type: string
          timestamp: string
        }
        Insert: {
          actor_id: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id: string
          target_type: string
          timestamp?: string
        }
        Update: {
          actor_id?: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type?: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id?: string
          target_type?: string
          timestamp?: string
        }
        Relationships: []
      }
      audit_logs_2026_03: {
        Row: {
          actor_id: string
          actor_type: Database["public"]["Enums"]["actor_type"]
          change_summary: Json | null
          company_id: string | null
          device_info: string | null
          event_type: string
          id: string
          ip_address: unknown
          project_id: string | null
          target_id: string
          target_type: string
          timestamp: string
        }
        Insert: {
          actor_id: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id: string
          target_type: string
          timestamp?: string
        }
        Update: {
          actor_id?: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type?: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id?: string
          target_type?: string
          timestamp?: string
        }
        Relationships: []
      }
      audit_logs_2026_04: {
        Row: {
          actor_id: string
          actor_type: Database["public"]["Enums"]["actor_type"]
          change_summary: Json | null
          company_id: string | null
          device_info: string | null
          event_type: string
          id: string
          ip_address: unknown
          project_id: string | null
          target_id: string
          target_type: string
          timestamp: string
        }
        Insert: {
          actor_id: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id: string
          target_type: string
          timestamp?: string
        }
        Update: {
          actor_id?: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type?: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id?: string
          target_type?: string
          timestamp?: string
        }
        Relationships: []
      }
      audit_logs_2026_05: {
        Row: {
          actor_id: string
          actor_type: Database["public"]["Enums"]["actor_type"]
          change_summary: Json | null
          company_id: string | null
          device_info: string | null
          event_type: string
          id: string
          ip_address: unknown
          project_id: string | null
          target_id: string
          target_type: string
          timestamp: string
        }
        Insert: {
          actor_id: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id: string
          target_type: string
          timestamp?: string
        }
        Update: {
          actor_id?: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type?: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id?: string
          target_type?: string
          timestamp?: string
        }
        Relationships: []
      }
      audit_logs_default: {
        Row: {
          actor_id: string
          actor_type: Database["public"]["Enums"]["actor_type"]
          change_summary: Json | null
          company_id: string | null
          device_info: string | null
          event_type: string
          id: string
          ip_address: unknown
          project_id: string | null
          target_id: string
          target_type: string
          timestamp: string
        }
        Insert: {
          actor_id: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id: string
          target_type: string
          timestamp?: string
        }
        Update: {
          actor_id?: string
          actor_type?: Database["public"]["Enums"]["actor_type"]
          change_summary?: Json | null
          company_id?: string | null
          device_info?: string | null
          event_type?: string
          id?: string
          ip_address?: unknown
          project_id?: string | null
          target_id?: string
          target_type?: string
          timestamp?: string
        }
        Relationships: []
      }
      client_error_logs: {
        Row: {
          company_id: string | null
          created_at: string
          error_kind: string
          id: string
          message: string
          metadata: Json
          route: string | null
          source: string | null
          stack: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          error_kind?: string
          id?: string
          message: string
          metadata?: Json
          route?: string | null
          source?: string | null
          stack?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string
          error_kind?: string
          id?: string
          message?: string
          metadata?: Json
          route?: string | null
          source?: string | null
          stack?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_error_logs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_error_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      client_viewer_activity: {
        Row: {
          company_id: string
          created_at: string
          error_message: string | null
          error_stack: string | null
          event_type: string
          id: string
          metadata: Json | null
          page_path: string | null
          project_id: string
          user_agent: string | null
          user_id: string | null
          viewer_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          error_message?: string | null
          error_stack?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          page_path?: string | null
          project_id: string
          user_agent?: string | null
          user_id?: string | null
          viewer_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          error_message?: string | null
          error_stack?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          page_path?: string | null
          project_id?: string
          user_agent?: string | null
          user_id?: string | null
          viewer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_viewer_activity_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_viewer_activity_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_viewer_activity_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_viewer_activity_viewer_id_fkey"
            columns: ["viewer_id"]
            isOneToOne: false
            referencedRelation: "project_client_viewers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_viewer_activity_viewer_id_fkey"
            columns: ["viewer_id"]
            isOneToOne: false
            referencedRelation: "project_client_viewers_safe"
            referencedColumns: ["id"]
          },
        ]
      }
      colour_tag_assignments: {
        Row: {
          colour_tag_id: string
          company_id: string
          created_at: string
          created_by: string
          id: string
          project_id: string
          target_id: string
          target_type: string
        }
        Insert: {
          colour_tag_id: string
          company_id: string
          created_at?: string
          created_by: string
          id?: string
          project_id: string
          target_id: string
          target_type: string
        }
        Update: {
          colour_tag_id?: string
          company_id?: string
          created_at?: string
          created_by?: string
          id?: string
          project_id?: string
          target_id?: string
          target_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "colour_tag_assignments_colour_tag_id_fkey"
            columns: ["colour_tag_id"]
            isOneToOne: false
            referencedRelation: "project_colour_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "colour_tag_assignments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "colour_tag_assignments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "colour_tag_assignments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          lead_domain: string
          name: string
          settings: Json | null
          status: Database["public"]["Enums"]["company_status"]
          subscription_tier: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          lead_domain: string
          name: string
          settings?: Json | null
          status?: Database["public"]["Enums"]["company_status"]
          subscription_tier?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          lead_domain?: string
          name?: string
          settings?: Json | null
          status?: Database["public"]["Enums"]["company_status"]
          subscription_tier?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      company_agencies: {
        Row: {
          company_id: string
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          created_at: string
          created_by: string
          deleted_at: string | null
          id: string
          logo_url: string | null
          name: string
          notes: string | null
          sort_order: number
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by: string
          deleted_at?: string | null
          id?: string
          logo_url?: string | null
          name: string
          notes?: string | null
          sort_order?: number
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          notes?: string | null
          sort_order?: number
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_agencies_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_agencies_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_agencies_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      company_clients: {
        Row: {
          company_id: string
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          created_at: string
          created_by: string
          deleted_at: string | null
          id: string
          logo_url: string | null
          name: string
          notes: string | null
          sort_order: number
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by: string
          deleted_at?: string | null
          id?: string
          logo_url?: string | null
          name: string
          notes?: string | null
          sort_order?: number
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          notes?: string | null
          sort_order?: number
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_clients_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_clients_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_clients_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      company_email_templates: {
        Row: {
          banner_image_url: string | null
          company_id: string
          created_at: string
          created_by: string | null
          cta_label: string | null
          id: string
          intro_markdown: string | null
          is_enabled: boolean
          outro_markdown: string | null
          preview_text: string | null
          signoff: string | null
          subject: string
          template_name: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          banner_image_url?: string | null
          company_id: string
          created_at?: string
          created_by?: string | null
          cta_label?: string | null
          id?: string
          intro_markdown?: string | null
          is_enabled?: boolean
          outro_markdown?: string | null
          preview_text?: string | null
          signoff?: string | null
          subject: string
          template_name: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          banner_image_url?: string | null
          company_id?: string
          created_at?: string
          created_by?: string | null
          cta_label?: string | null
          id?: string
          intro_markdown?: string | null
          is_enabled?: boolean
          outro_markdown?: string | null
          preview_text?: string | null
          signoff?: string | null
          subject?: string
          template_name?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_email_templates_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_library_items: {
        Row: {
          company_id: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          description: string | null
          id: string
          is_hidden: boolean
          is_system_default: boolean
          item_type: string
          label: string
          metadata: Json
          module_key: string
          ref_id: string | null
          ref_table: string | null
          sort_order: number
          system_seed_id: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          is_hidden?: boolean
          is_system_default?: boolean
          item_type: string
          label: string
          metadata?: Json
          module_key: string
          ref_id?: string | null
          ref_table?: string | null
          sort_order?: number
          system_seed_id?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          is_hidden?: boolean
          is_system_default?: boolean
          item_type?: string
          label?: string
          metadata?: Json
          module_key?: string
          ref_id?: string | null
          ref_table?: string | null
          sort_order?: number
          system_seed_id?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_library_items_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_library_items_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_library_items_system_seed_id_fkey"
            columns: ["system_seed_id"]
            isOneToOne: false
            referencedRelation: "platform_library_seeds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_library_items_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      company_memberships: {
        Row: {
          company_id: string
          created_at: string
          id: string
          joined_at: string
          status: Database["public"]["Enums"]["membership_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          joined_at?: string
          status?: Database["public"]["Enums"]["membership_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          joined_at?: string
          status?: Database["public"]["Enums"]["membership_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_memberships_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_memberships_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      company_module_overrides: {
        Row: {
          company_id: string
          created_at: string
          expires_at: string | null
          id: string
          is_enabled: boolean
          module_key: string
          unlocked_at: string | null
          unlocked_via: Database["public"]["Enums"]["module_unlock_method"]
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_enabled?: boolean
          module_key: string
          unlocked_at?: string | null
          unlocked_via?: Database["public"]["Enums"]["module_unlock_method"]
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_enabled?: boolean
          module_key?: string
          unlocked_at?: string | null
          unlocked_via?: Database["public"]["Enums"]["module_unlock_method"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_module_overrides_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_module_overrides_module_key_fkey"
            columns: ["module_key"]
            isOneToOne: false
            referencedRelation: "module_registry"
            referencedColumns: ["module_key"]
          },
        ]
      }
      crew_blocked_companies: {
        Row: {
          blocked_at: string
          company_id: string
          crew_profile_id: string
          reason: string | null
        }
        Insert: {
          blocked_at?: string
          company_id: string
          crew_profile_id: string
          reason?: string | null
        }
        Update: {
          blocked_at?: string
          company_id?: string
          crew_profile_id?: string
          reason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_blocked_companies_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_blocked_companies_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_book_grant_dismissals: {
        Row: {
          company_id: string
          created_at: string
          dismissed_by: string
          dismissed_user_id: string
          id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          dismissed_by: string
          dismissed_user_id: string
          id?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          dismissed_by?: string
          dismissed_user_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crew_book_grant_dismissals_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_book_grant_dismissals_dismissed_by_fkey"
            columns: ["dismissed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_book_grant_dismissals_dismissed_user_id_fkey"
            columns: ["dismissed_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_book_memberships: {
        Row: {
          company_id: string
          created_at: string
          granted_at: string
          granted_by: string | null
          id: string
          revoked_at: string | null
          revoked_by: string | null
          role: Database["public"]["Enums"]["crew_book_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          granted_at?: string
          granted_by?: string | null
          id?: string
          revoked_at?: string | null
          revoked_by?: string | null
          role: Database["public"]["Enums"]["crew_book_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          granted_at?: string
          granted_by?: string | null
          id?: string
          revoked_at?: string | null
          revoked_by?: string | null
          role?: Database["public"]["Enums"]["crew_book_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crew_book_memberships_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_book_saved_searches: {
        Row: {
          company_id: string
          created_at: string
          deleted_at: string | null
          filters: Json
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          deleted_at?: string | null
          filters?: Json
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          deleted_at?: string | null
          filters?: Json
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crew_book_saved_searches_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_companies: {
        Row: {
          company_id: string
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          created_at: string
          created_by: string
          deleted_at: string | null
          id: string
          name: string
          notes: string | null
          services_provided: string[] | null
          sort_order: number
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by: string
          deleted_at?: string | null
          id?: string
          name: string
          notes?: string | null
          services_provided?: string[] | null
          sort_order?: number
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          id?: string
          name?: string
          notes?: string | null
          services_provided?: string[] | null
          sort_order?: number
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "crew_companies_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_companies_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_companies_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_company_links: {
        Row: {
          accepted_at: string | null
          communications_muted_at: string | null
          company_id: string
          company_notes: string | null
          company_tags: string[] | null
          created_at: string
          crew_profile_id: string
          decline_reason: string | null
          declined_at: string | null
          declined_by: string | null
          end_reason: string | null
          ended_at: string | null
          ended_by: string | null
          expired_at: string | null
          id: string
          initiated_by: Database["public"]["Enums"]["crew_link_initiator"]
          invitation_token: string | null
          invited_by: string | null
          last_reminder_at: string | null
          request_message: string | null
          requested_by_user_id: string | null
          revoked_at: string | null
          revoked_by: string | null
          status: Database["public"]["Enums"]["crew_link_status"]
          updated_at: string
          withdrawn_at: string | null
          withdrawn_reason: string | null
        }
        Insert: {
          accepted_at?: string | null
          communications_muted_at?: string | null
          company_id: string
          company_notes?: string | null
          company_tags?: string[] | null
          created_at?: string
          crew_profile_id: string
          decline_reason?: string | null
          declined_at?: string | null
          declined_by?: string | null
          end_reason?: string | null
          ended_at?: string | null
          ended_by?: string | null
          expired_at?: string | null
          id?: string
          initiated_by?: Database["public"]["Enums"]["crew_link_initiator"]
          invitation_token?: string | null
          invited_by?: string | null
          last_reminder_at?: string | null
          request_message?: string | null
          requested_by_user_id?: string | null
          revoked_at?: string | null
          revoked_by?: string | null
          status?: Database["public"]["Enums"]["crew_link_status"]
          updated_at?: string
          withdrawn_at?: string | null
          withdrawn_reason?: string | null
        }
        Update: {
          accepted_at?: string | null
          communications_muted_at?: string | null
          company_id?: string
          company_notes?: string | null
          company_tags?: string[] | null
          created_at?: string
          crew_profile_id?: string
          decline_reason?: string | null
          declined_at?: string | null
          declined_by?: string | null
          end_reason?: string | null
          ended_at?: string | null
          ended_by?: string | null
          expired_at?: string | null
          id?: string
          initiated_by?: Database["public"]["Enums"]["crew_link_initiator"]
          invitation_token?: string | null
          invited_by?: string | null
          last_reminder_at?: string | null
          request_message?: string | null
          requested_by_user_id?: string | null
          revoked_at?: string | null
          revoked_by?: string | null
          status?: Database["public"]["Enums"]["crew_link_status"]
          updated_at?: string
          withdrawn_at?: string | null
          withdrawn_reason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_company_links_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_company_links_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_company_links_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_company_links_requested_by_user_id_fkey"
            columns: ["requested_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_company_links_revoked_by_fkey"
            columns: ["revoked_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_company_members: {
        Row: {
          created_at: string
          crew_company_id: string
          crew_profile_id: string | null
          deleted_at: string | null
          display_name: string
          email: string | null
          id: string
          notes: string | null
          phone: string | null
          role_description: string | null
          sort_order: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          crew_company_id: string
          crew_profile_id?: string | null
          deleted_at?: string | null
          display_name: string
          email?: string | null
          id?: string
          notes?: string | null
          phone?: string | null
          role_description?: string | null
          sort_order?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          crew_company_id?: string
          crew_profile_id?: string | null
          deleted_at?: string | null
          display_name?: string
          email?: string | null
          id?: string
          notes?: string | null
          phone?: string | null
          role_description?: string | null
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "crew_company_members_crew_company_id_fkey"
            columns: ["crew_company_id"]
            isOneToOne: false
            referencedRelation: "crew_companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_company_members_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_company_requirements: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          custom_field_id: string | null
          id: string
          is_enabled: boolean
          notes: string | null
          requirement_key: string
          requirement_type: Database["public"]["Enums"]["crew_requirement_type"]
          severity: Database["public"]["Enums"]["crew_requirement_severity"]
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          custom_field_id?: string | null
          id?: string
          is_enabled?: boolean
          notes?: string | null
          requirement_key: string
          requirement_type: Database["public"]["Enums"]["crew_requirement_type"]
          severity?: Database["public"]["Enums"]["crew_requirement_severity"]
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          custom_field_id?: string | null
          id?: string
          is_enabled?: boolean
          notes?: string | null
          requirement_key?: string
          requirement_type?: Database["public"]["Enums"]["crew_requirement_type"]
          severity?: Database["public"]["Enums"]["crew_requirement_severity"]
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "crew_company_requirements_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_company_requirements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_company_requirements_custom_field_id_fkey"
            columns: ["custom_field_id"]
            isOneToOne: false
            referencedRelation: "crew_profile_field_definitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_company_requirements_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_documents: {
        Row: {
          created_at: string
          crew_profile_id: string
          deleted_at: string | null
          document_type: Database["public"]["Enums"]["crew_document_type"]
          expires_at: string | null
          file_name: string | null
          file_size_bytes: number | null
          file_url: string
          id: string
          is_verified: boolean
          notes: string | null
          title: string
          updated_at: string
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          created_at?: string
          crew_profile_id: string
          deleted_at?: string | null
          document_type: Database["public"]["Enums"]["crew_document_type"]
          expires_at?: string | null
          file_name?: string | null
          file_size_bytes?: number | null
          file_url: string
          id?: string
          is_verified?: boolean
          notes?: string | null
          title: string
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          created_at?: string
          crew_profile_id?: string
          deleted_at?: string | null
          document_type?: Database["public"]["Enums"]["crew_document_type"]
          expires_at?: string | null
          file_name?: string | null
          file_size_bytes?: number | null
          file_url?: string
          id?: string
          is_verified?: boolean
          notes?: string | null
          title?: string
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_documents_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_documents_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_insurance_documents: {
        Row: {
          cover_amount: number | null
          cover_currency: string | null
          created_at: string
          crew_profile_id: string
          custom_label: string | null
          deleted_at: string | null
          document_file_name: string | null
          document_file_size_bytes: number | null
          document_file_url: string | null
          id: string
          insurance_type: Database["public"]["Enums"]["crew_insurance_type"]
          insurer: string | null
          is_verified: boolean
          notes: string | null
          policy_number: string | null
          sort_order: number
          updated_at: string
          valid_from: string | null
          valid_until: string | null
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          cover_amount?: number | null
          cover_currency?: string | null
          created_at?: string
          crew_profile_id: string
          custom_label?: string | null
          deleted_at?: string | null
          document_file_name?: string | null
          document_file_size_bytes?: number | null
          document_file_url?: string | null
          id?: string
          insurance_type: Database["public"]["Enums"]["crew_insurance_type"]
          insurer?: string | null
          is_verified?: boolean
          notes?: string | null
          policy_number?: string | null
          sort_order?: number
          updated_at?: string
          valid_from?: string | null
          valid_until?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          cover_amount?: number | null
          cover_currency?: string | null
          created_at?: string
          crew_profile_id?: string
          custom_label?: string | null
          deleted_at?: string | null
          document_file_name?: string | null
          document_file_size_bytes?: number | null
          document_file_url?: string | null
          id?: string
          insurance_type?: Database["public"]["Enums"]["crew_insurance_type"]
          insurer?: string | null
          is_verified?: boolean
          notes?: string | null
          policy_number?: string | null
          sort_order?: number
          updated_at?: string
          valid_from?: string | null
          valid_until?: string | null
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_insurance_documents_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_insurance_documents_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_profile_field_definitions: {
        Row: {
          created_at: string
          created_by: string | null
          deleted_at: string | null
          description: string | null
          field_key: string
          field_type: Database["public"]["Enums"]["crew_field_type"]
          id: string
          is_active: boolean
          label: string
          options: Json
          sort_order: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          field_key: string
          field_type: Database["public"]["Enums"]["crew_field_type"]
          id?: string
          is_active?: boolean
          label: string
          options?: Json
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          field_key?: string
          field_type?: Database["public"]["Enums"]["crew_field_type"]
          id?: string
          is_active?: boolean
          label?: string
          options?: Json
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_profile_field_definitions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_profile_field_definitions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_profile_field_values: {
        Row: {
          created_at: string
          crew_profile_id: string
          field_definition_id: string
          id: string
          updated_at: string
          value: Json
        }
        Insert: {
          created_at?: string
          crew_profile_id: string
          field_definition_id: string
          id?: string
          updated_at?: string
          value?: Json
        }
        Update: {
          created_at?: string
          crew_profile_id?: string
          field_definition_id?: string
          id?: string
          updated_at?: string
          value?: Json
        }
        Relationships: [
          {
            foreignKeyName: "crew_profile_field_values_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_profile_field_values_field_definition_id_fkey"
            columns: ["field_definition_id"]
            isOneToOne: false
            referencedRelation: "crew_profile_field_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_profile_privacy: {
        Row: {
          address_visibility: Database["public"]["Enums"]["field_visibility"]
          availability_visibility: Database["public"]["Enums"]["field_visibility"]
          avatar_visibility: Database["public"]["Enums"]["field_visibility"]
          bio_visibility: Database["public"]["Enums"]["field_visibility"]
          created_at: string
          crew_profile_id: string
          dob_visibility: Database["public"]["Enums"]["field_visibility"]
          documents_visibility: Database["public"]["Enums"]["field_visibility"]
          driving_visibility: Database["public"]["Enums"]["field_visibility"]
          email_visibility: Database["public"]["Enums"]["field_visibility"]
          emergency_contact_visibility: Database["public"]["Enums"]["field_visibility"]
          engagement_visibility: Database["public"]["Enums"]["field_visibility"]
          financial_visibility: Database["public"]["Enums"]["field_visibility"]
          id: string
          insurance_visibility: Database["public"]["Enums"]["field_visibility"]
          is_custom_overridden: boolean
          legal_name_visibility: Database["public"]["Enums"]["field_visibility"]
          location_visibility: Database["public"]["Enums"]["field_visibility"]
          nationality_visibility: Database["public"]["Enums"]["field_visibility"]
          phone_visibility: Database["public"]["Enums"]["field_visibility"]
          photo_visibility: Database["public"]["Enums"]["field_visibility"]
          pronouns_visibility: Database["public"]["Enums"]["field_visibility"]
          qualifications_visibility: Database["public"]["Enums"]["field_visibility"]
          sizes_visibility: Database["public"]["Enums"]["field_visibility"]
          skills_visibility: Database["public"]["Enums"]["field_visibility"]
          socials_visibility: Database["public"]["Enums"]["field_visibility"]
          trading_name_visibility: Database["public"]["Enums"]["field_visibility"]
          travel_visibility: Database["public"]["Enums"]["field_visibility"]
          updated_at: string
          welfare_visibility: Database["public"]["Enums"]["field_visibility"]
          years_experience_visibility: Database["public"]["Enums"]["field_visibility"]
        }
        Insert: {
          address_visibility?: Database["public"]["Enums"]["field_visibility"]
          availability_visibility?: Database["public"]["Enums"]["field_visibility"]
          avatar_visibility?: Database["public"]["Enums"]["field_visibility"]
          bio_visibility?: Database["public"]["Enums"]["field_visibility"]
          created_at?: string
          crew_profile_id: string
          dob_visibility?: Database["public"]["Enums"]["field_visibility"]
          documents_visibility?: Database["public"]["Enums"]["field_visibility"]
          driving_visibility?: Database["public"]["Enums"]["field_visibility"]
          email_visibility?: Database["public"]["Enums"]["field_visibility"]
          emergency_contact_visibility?: Database["public"]["Enums"]["field_visibility"]
          engagement_visibility?: Database["public"]["Enums"]["field_visibility"]
          financial_visibility?: Database["public"]["Enums"]["field_visibility"]
          id?: string
          insurance_visibility?: Database["public"]["Enums"]["field_visibility"]
          is_custom_overridden?: boolean
          legal_name_visibility?: Database["public"]["Enums"]["field_visibility"]
          location_visibility?: Database["public"]["Enums"]["field_visibility"]
          nationality_visibility?: Database["public"]["Enums"]["field_visibility"]
          phone_visibility?: Database["public"]["Enums"]["field_visibility"]
          photo_visibility?: Database["public"]["Enums"]["field_visibility"]
          pronouns_visibility?: Database["public"]["Enums"]["field_visibility"]
          qualifications_visibility?: Database["public"]["Enums"]["field_visibility"]
          sizes_visibility?: Database["public"]["Enums"]["field_visibility"]
          skills_visibility?: Database["public"]["Enums"]["field_visibility"]
          socials_visibility?: Database["public"]["Enums"]["field_visibility"]
          trading_name_visibility?: Database["public"]["Enums"]["field_visibility"]
          travel_visibility?: Database["public"]["Enums"]["field_visibility"]
          updated_at?: string
          welfare_visibility?: Database["public"]["Enums"]["field_visibility"]
          years_experience_visibility?: Database["public"]["Enums"]["field_visibility"]
        }
        Update: {
          address_visibility?: Database["public"]["Enums"]["field_visibility"]
          availability_visibility?: Database["public"]["Enums"]["field_visibility"]
          avatar_visibility?: Database["public"]["Enums"]["field_visibility"]
          bio_visibility?: Database["public"]["Enums"]["field_visibility"]
          created_at?: string
          crew_profile_id?: string
          dob_visibility?: Database["public"]["Enums"]["field_visibility"]
          documents_visibility?: Database["public"]["Enums"]["field_visibility"]
          driving_visibility?: Database["public"]["Enums"]["field_visibility"]
          email_visibility?: Database["public"]["Enums"]["field_visibility"]
          emergency_contact_visibility?: Database["public"]["Enums"]["field_visibility"]
          engagement_visibility?: Database["public"]["Enums"]["field_visibility"]
          financial_visibility?: Database["public"]["Enums"]["field_visibility"]
          id?: string
          insurance_visibility?: Database["public"]["Enums"]["field_visibility"]
          is_custom_overridden?: boolean
          legal_name_visibility?: Database["public"]["Enums"]["field_visibility"]
          location_visibility?: Database["public"]["Enums"]["field_visibility"]
          nationality_visibility?: Database["public"]["Enums"]["field_visibility"]
          phone_visibility?: Database["public"]["Enums"]["field_visibility"]
          photo_visibility?: Database["public"]["Enums"]["field_visibility"]
          pronouns_visibility?: Database["public"]["Enums"]["field_visibility"]
          qualifications_visibility?: Database["public"]["Enums"]["field_visibility"]
          sizes_visibility?: Database["public"]["Enums"]["field_visibility"]
          skills_visibility?: Database["public"]["Enums"]["field_visibility"]
          socials_visibility?: Database["public"]["Enums"]["field_visibility"]
          trading_name_visibility?: Database["public"]["Enums"]["field_visibility"]
          travel_visibility?: Database["public"]["Enums"]["field_visibility"]
          updated_at?: string
          welfare_visibility?: Database["public"]["Enums"]["field_visibility"]
          years_experience_visibility?: Database["public"]["Enums"]["field_visibility"]
        }
        Relationships: [
          {
            foreignKeyName: "crew_profile_privacy_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: true
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_profile_visibility_history: {
        Row: {
          acknowledgement_text: string | null
          change_type: string
          changed_by: string | null
          created_at: string
          crew_profile_id: string
          id: string
          ip_address: string | null
          new_mode:
            | Database["public"]["Enums"]["profile_visibility_mode"]
            | null
          new_opt_out: boolean | null
          previous_mode:
            | Database["public"]["Enums"]["profile_visibility_mode"]
            | null
          previous_opt_out: boolean | null
          user_agent: string | null
        }
        Insert: {
          acknowledgement_text?: string | null
          change_type: string
          changed_by?: string | null
          created_at?: string
          crew_profile_id: string
          id?: string
          ip_address?: string | null
          new_mode?:
            | Database["public"]["Enums"]["profile_visibility_mode"]
            | null
          new_opt_out?: boolean | null
          previous_mode?:
            | Database["public"]["Enums"]["profile_visibility_mode"]
            | null
          previous_opt_out?: boolean | null
          user_agent?: string | null
        }
        Update: {
          acknowledgement_text?: string | null
          change_type?: string
          changed_by?: string | null
          created_at?: string
          crew_profile_id?: string
          id?: string
          ip_address?: string | null
          new_mode?:
            | Database["public"]["Enums"]["profile_visibility_mode"]
            | null
          new_opt_out?: boolean | null
          previous_mode?:
            | Database["public"]["Enums"]["profile_visibility_mode"]
            | null
          previous_opt_out?: boolean | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_profile_visibility_history_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_profiles: {
        Row: {
          about_me: string | null
          accessibility_needs: string | null
          address_line1: string | null
          address_line2: string | null
          address_postcode: string | null
          address_region: string | null
          ai_avatar_generated_at: string | null
          ai_avatar_path: string | null
          ai_avatar_style: string | null
          ai_avatar_url: string | null
          allergies: string | null
          availability_notes: string | null
          availability_status: Database["public"]["Enums"]["crew_availability"]
          avatar_url: string | null
          bio: string | null
          company_number: string | null
          created_at: string
          date_of_birth: string | null
          default_avatar_source: string
          deleted_at: string | null
          dietary_requirements: string | null
          discoverable_opt_out: boolean
          display_name: string
          display_name_is_custom: boolean
          driving_licence_categories: string[] | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          engagement_types: string[] | null
          first_name: string | null
          fun_fav_job: string | null
          fun_industry_story: string | null
          fun_proudest_role: string | null
          headline: string | null
          id: string
          inbound_email_on_approved: boolean
          inbound_email_on_invited: boolean
          inbound_email_on_reminder: boolean
          instagram_handle: string | null
          is_public: boolean
          languages: string[] | null
          last_dashboard_seen_at: string | null
          last_name: string | null
          linkedin_handle: string | null
          location_city: string | null
          location_country: string | null
          name_migration_required: boolean
          nationality: string | null
          nickname: string | null
          notice_period_days: number | null
          onboarding_step: Database["public"]["Enums"]["crew_onboarding_step"]
          outbound_email_on_accepted: boolean
          outbound_email_on_declined: boolean
          passport_held: boolean | null
          payment_method:
            | Database["public"]["Enums"]["crew_payment_method"]
            | null
          phone: string | null
          photo_url: string | null
          ppe_size: Database["public"]["Enums"]["apparel_size"] | null
          preferred_day_rate_currency: string | null
          preferred_day_rate_max: number | null
          preferred_day_rate_min: number | null
          profile_visibility_mode: Database["public"]["Enums"]["profile_visibility_mode"]
          pronouns: string | null
          showreel_url: string | null
          skills: string[] | null
          tax_residency_country: string | null
          tax_status: Database["public"]["Enums"]["crew_tax_status"] | null
          technical_skills_summary: string | null
          trading_name: string | null
          travel_willingness:
            | Database["public"]["Enums"]["crew_travel_willingness"]
            | null
          tshirt_size: Database["public"]["Enums"]["apparel_size"] | null
          updated_at: string
          user_id: string
          username: string | null
          utr_number: string | null
          vat_number: string | null
          vat_registered: boolean | null
          vehicle_owned: string | null
          visa_notes: string | null
          website_url: string | null
          willing_to_travel_internationally: boolean | null
          years_experience: number | null
        }
        Insert: {
          about_me?: string | null
          accessibility_needs?: string | null
          address_line1?: string | null
          address_line2?: string | null
          address_postcode?: string | null
          address_region?: string | null
          ai_avatar_generated_at?: string | null
          ai_avatar_path?: string | null
          ai_avatar_style?: string | null
          ai_avatar_url?: string | null
          allergies?: string | null
          availability_notes?: string | null
          availability_status?: Database["public"]["Enums"]["crew_availability"]
          avatar_url?: string | null
          bio?: string | null
          company_number?: string | null
          created_at?: string
          date_of_birth?: string | null
          default_avatar_source?: string
          deleted_at?: string | null
          dietary_requirements?: string | null
          discoverable_opt_out?: boolean
          display_name: string
          display_name_is_custom?: boolean
          driving_licence_categories?: string[] | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relationship?: string | null
          engagement_types?: string[] | null
          first_name?: string | null
          fun_fav_job?: string | null
          fun_industry_story?: string | null
          fun_proudest_role?: string | null
          headline?: string | null
          id?: string
          inbound_email_on_approved?: boolean
          inbound_email_on_invited?: boolean
          inbound_email_on_reminder?: boolean
          instagram_handle?: string | null
          is_public?: boolean
          languages?: string[] | null
          last_dashboard_seen_at?: string | null
          last_name?: string | null
          linkedin_handle?: string | null
          location_city?: string | null
          location_country?: string | null
          name_migration_required?: boolean
          nationality?: string | null
          nickname?: string | null
          notice_period_days?: number | null
          onboarding_step?: Database["public"]["Enums"]["crew_onboarding_step"]
          outbound_email_on_accepted?: boolean
          outbound_email_on_declined?: boolean
          passport_held?: boolean | null
          payment_method?:
            | Database["public"]["Enums"]["crew_payment_method"]
            | null
          phone?: string | null
          photo_url?: string | null
          ppe_size?: Database["public"]["Enums"]["apparel_size"] | null
          preferred_day_rate_currency?: string | null
          preferred_day_rate_max?: number | null
          preferred_day_rate_min?: number | null
          profile_visibility_mode?: Database["public"]["Enums"]["profile_visibility_mode"]
          pronouns?: string | null
          showreel_url?: string | null
          skills?: string[] | null
          tax_residency_country?: string | null
          tax_status?: Database["public"]["Enums"]["crew_tax_status"] | null
          technical_skills_summary?: string | null
          trading_name?: string | null
          travel_willingness?:
            | Database["public"]["Enums"]["crew_travel_willingness"]
            | null
          tshirt_size?: Database["public"]["Enums"]["apparel_size"] | null
          updated_at?: string
          user_id: string
          username?: string | null
          utr_number?: string | null
          vat_number?: string | null
          vat_registered?: boolean | null
          vehicle_owned?: string | null
          visa_notes?: string | null
          website_url?: string | null
          willing_to_travel_internationally?: boolean | null
          years_experience?: number | null
        }
        Update: {
          about_me?: string | null
          accessibility_needs?: string | null
          address_line1?: string | null
          address_line2?: string | null
          address_postcode?: string | null
          address_region?: string | null
          ai_avatar_generated_at?: string | null
          ai_avatar_path?: string | null
          ai_avatar_style?: string | null
          ai_avatar_url?: string | null
          allergies?: string | null
          availability_notes?: string | null
          availability_status?: Database["public"]["Enums"]["crew_availability"]
          avatar_url?: string | null
          bio?: string | null
          company_number?: string | null
          created_at?: string
          date_of_birth?: string | null
          default_avatar_source?: string
          deleted_at?: string | null
          dietary_requirements?: string | null
          discoverable_opt_out?: boolean
          display_name?: string
          display_name_is_custom?: boolean
          driving_licence_categories?: string[] | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relationship?: string | null
          engagement_types?: string[] | null
          first_name?: string | null
          fun_fav_job?: string | null
          fun_industry_story?: string | null
          fun_proudest_role?: string | null
          headline?: string | null
          id?: string
          inbound_email_on_approved?: boolean
          inbound_email_on_invited?: boolean
          inbound_email_on_reminder?: boolean
          instagram_handle?: string | null
          is_public?: boolean
          languages?: string[] | null
          last_dashboard_seen_at?: string | null
          last_name?: string | null
          linkedin_handle?: string | null
          location_city?: string | null
          location_country?: string | null
          name_migration_required?: boolean
          nationality?: string | null
          nickname?: string | null
          notice_period_days?: number | null
          onboarding_step?: Database["public"]["Enums"]["crew_onboarding_step"]
          outbound_email_on_accepted?: boolean
          outbound_email_on_declined?: boolean
          passport_held?: boolean | null
          payment_method?:
            | Database["public"]["Enums"]["crew_payment_method"]
            | null
          phone?: string | null
          photo_url?: string | null
          ppe_size?: Database["public"]["Enums"]["apparel_size"] | null
          preferred_day_rate_currency?: string | null
          preferred_day_rate_max?: number | null
          preferred_day_rate_min?: number | null
          profile_visibility_mode?: Database["public"]["Enums"]["profile_visibility_mode"]
          pronouns?: string | null
          showreel_url?: string | null
          skills?: string[] | null
          tax_residency_country?: string | null
          tax_status?: Database["public"]["Enums"]["crew_tax_status"] | null
          technical_skills_summary?: string | null
          trading_name?: string | null
          travel_willingness?:
            | Database["public"]["Enums"]["crew_travel_willingness"]
            | null
          tshirt_size?: Database["public"]["Enums"]["apparel_size"] | null
          updated_at?: string
          user_id?: string
          username?: string | null
          utr_number?: string | null
          vat_number?: string | null
          vat_registered?: boolean | null
          vehicle_owned?: string | null
          visa_notes?: string | null
          website_url?: string | null
          willing_to_travel_internationally?: boolean | null
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_qualifications: {
        Row: {
          certificate_file_name: string | null
          certificate_file_size_bytes: number | null
          certificate_file_url: string | null
          created_at: string
          crew_profile_id: string
          deleted_at: string | null
          expires_at: string | null
          id: string
          is_verified: boolean
          issued_date: string | null
          issuing_body: string | null
          name: string
          notes: string | null
          reference_number: string | null
          sort_order: number
          updated_at: string
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          certificate_file_name?: string | null
          certificate_file_size_bytes?: number | null
          certificate_file_url?: string | null
          created_at?: string
          crew_profile_id: string
          deleted_at?: string | null
          expires_at?: string | null
          id?: string
          is_verified?: boolean
          issued_date?: string | null
          issuing_body?: string | null
          name: string
          notes?: string | null
          reference_number?: string | null
          sort_order?: number
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          certificate_file_name?: string | null
          certificate_file_size_bytes?: number | null
          certificate_file_url?: string | null
          created_at?: string
          crew_profile_id?: string
          deleted_at?: string | null
          expires_at?: string | null
          id?: string
          is_verified?: boolean
          issued_date?: string | null
          issuing_body?: string | null
          name?: string
          notes?: string | null
          reference_number?: string | null
          sort_order?: number
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_qualifications_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_qualifications_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_signup_invites: {
        Row: {
          company_id: string
          consumed_at: string | null
          consumed_by_user_id: string | null
          created_at: string
          created_by: string
          email: string
          expires_at: string
          id: string
          invitation_token: string
          placeholder_id: string
          project_id: string
        }
        Insert: {
          company_id: string
          consumed_at?: string | null
          consumed_by_user_id?: string | null
          created_at?: string
          created_by: string
          email: string
          expires_at: string
          id?: string
          invitation_token?: string
          placeholder_id: string
          project_id: string
        }
        Update: {
          company_id?: string
          consumed_at?: string | null
          consumed_by_user_id?: string | null
          created_at?: string
          created_by?: string
          email?: string
          expires_at?: string
          id?: string
          invitation_token?: string
          placeholder_id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crew_signup_invites_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_signup_invites_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_signup_invites_placeholder_id_fkey"
            columns: ["placeholder_id"]
            isOneToOne: false
            referencedRelation: "staff_preliminary_placeholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_signup_invites_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_skill_user_suggestions: {
        Row: {
          added_at: string | null
          catalog_skill_id: string
          created_at: string
          crew_profile_id: string
          dismissed_against_version: number | null
          dismissed_at: string | null
          id: string
          source: Database["public"]["Enums"]["skill_suggestion_source"]
          updated_at: string
        }
        Insert: {
          added_at?: string | null
          catalog_skill_id: string
          created_at?: string
          crew_profile_id: string
          dismissed_against_version?: number | null
          dismissed_at?: string | null
          id?: string
          source?: Database["public"]["Enums"]["skill_suggestion_source"]
          updated_at?: string
        }
        Update: {
          added_at?: string | null
          catalog_skill_id?: string
          created_at?: string
          crew_profile_id?: string
          dismissed_against_version?: number | null
          dismissed_at?: string | null
          id?: string
          source?: Database["public"]["Enums"]["skill_suggestion_source"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "crew_skill_user_suggestions_catalog_skill_id_fkey"
            columns: ["catalog_skill_id"]
            isOneToOne: false
            referencedRelation: "platform_skill_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_skill_user_suggestions_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_skills: {
        Row: {
          catalog_skill_id: string | null
          created_at: string
          crew_profile_id: string
          custom_label: string | null
          deleted_at: string | null
          id: string
          notes: string | null
          proficiency:
            | Database["public"]["Enums"]["crew_skill_proficiency"]
            | null
          sort_order: number
          updated_at: string
          years_experience: number | null
        }
        Insert: {
          catalog_skill_id?: string | null
          created_at?: string
          crew_profile_id: string
          custom_label?: string | null
          deleted_at?: string | null
          id?: string
          notes?: string | null
          proficiency?:
            | Database["public"]["Enums"]["crew_skill_proficiency"]
            | null
          sort_order?: number
          updated_at?: string
          years_experience?: number | null
        }
        Update: {
          catalog_skill_id?: string | null
          created_at?: string
          crew_profile_id?: string
          custom_label?: string | null
          deleted_at?: string | null
          id?: string
          notes?: string | null
          proficiency?:
            | Database["public"]["Enums"]["crew_skill_proficiency"]
            | null
          sort_order?: number
          updated_at?: string
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_skills_catalog_skill_id_fkey"
            columns: ["catalog_skill_id"]
            isOneToOne: false
            referencedRelation: "platform_skill_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "crew_skills_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_cargo_items: {
        Row: {
          created_at: string
          created_by: string | null
          deleted_at: string | null
          delivery_route_id: string
          description: string
          equipment_type: string | null
          handling_notes: string | null
          id: string
          is_hazardous: boolean
          quantity: number | null
          sort_order: number
          updated_at: string
          updated_by: string | null
          weight_kg: number | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          delivery_route_id: string
          description: string
          equipment_type?: string | null
          handling_notes?: string | null
          id?: string
          is_hazardous?: boolean
          quantity?: number | null
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
          weight_kg?: number | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          delivery_route_id?: string
          description?: string
          equipment_type?: string | null
          handling_notes?: string | null
          id?: string
          is_hazardous?: boolean
          quantity?: number | null
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "delivery_cargo_items_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_cargo_items_delivery_route_id_fkey"
            columns: ["delivery_route_id"]
            isOneToOne: false
            referencedRelation: "delivery_routes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_cargo_items_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_routes: {
        Row: {
          actual_arrival: string | null
          actual_departure: string | null
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          driver_name: string | null
          driver_phone: string | null
          id: string
          paired_route_id: string | null
          project_id: string
          route_name: string | null
          route_notes: string | null
          sort_order: number
          status: Database["public"]["Enums"]["delivery_status"]
          unique_identifier: string | null
          updated_at: string
          updated_by: string
          vehicle_registration: string | null
          vehicle_type: string | null
        }
        Insert: {
          actual_arrival?: string | null
          actual_departure?: string | null
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          driver_name?: string | null
          driver_phone?: string | null
          id?: string
          paired_route_id?: string | null
          project_id: string
          route_name?: string | null
          route_notes?: string | null
          sort_order?: number
          status?: Database["public"]["Enums"]["delivery_status"]
          unique_identifier?: string | null
          updated_at?: string
          updated_by: string
          vehicle_registration?: string | null
          vehicle_type?: string | null
        }
        Update: {
          actual_arrival?: string | null
          actual_departure?: string | null
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          driver_name?: string | null
          driver_phone?: string | null
          id?: string
          paired_route_id?: string | null
          project_id?: string
          route_name?: string | null
          route_notes?: string | null
          sort_order?: number
          status?: Database["public"]["Enums"]["delivery_status"]
          unique_identifier?: string | null
          updated_at?: string
          updated_by?: string
          vehicle_registration?: string | null
          vehicle_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "delivery_routes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_routes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_routes_paired_route_id_fkey"
            columns: ["paired_route_id"]
            isOneToOne: false
            referencedRelation: "delivery_routes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_routes_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_routes_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_send_log: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email?: string
          status?: string
          template_name?: string
        }
        Relationships: []
      }
      email_send_state: {
        Row: {
          auth_email_ttl_minutes: number
          batch_size: number
          id: number
          retry_after_until: string | null
          send_delay_ms: number
          transactional_email_ttl_minutes: number
          updated_at: string
        }
        Insert: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Update: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Relationships: []
      }
      email_unsubscribe_tokens: {
        Row: {
          created_at: string
          email: string
          id: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      invitations: {
        Row: {
          accepted_at: string | null
          company_id: string
          created_at: string
          email: string
          expires_at: string
          id: string
          intended_role: string
          invitation_token: string | null
          invited_by: string
          module_access: Json | null
          project_id: string | null
          status: Database["public"]["Enums"]["invitation_status"]
        }
        Insert: {
          accepted_at?: string | null
          company_id: string
          created_at?: string
          email: string
          expires_at: string
          id?: string
          intended_role: string
          invitation_token?: string | null
          invited_by: string
          module_access?: Json | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["invitation_status"]
        }
        Update: {
          accepted_at?: string | null
          company_id?: string
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          intended_role?: string
          invitation_token?: string | null
          invited_by?: string
          module_access?: Json | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["invitation_status"]
        }
        Relationships: [
          {
            foreignKeyName: "invitations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invitations_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invitations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      module_dev_access: {
        Row: {
          access_type: Database["public"]["Enums"]["dev_access_type"]
          company_id: string | null
          granted_at: string
          granted_by: string | null
          id: string
          module_key: string
          notes: string | null
          revoked_at: string | null
          user_id: string | null
        }
        Insert: {
          access_type: Database["public"]["Enums"]["dev_access_type"]
          company_id?: string | null
          granted_at?: string
          granted_by?: string | null
          id?: string
          module_key: string
          notes?: string | null
          revoked_at?: string | null
          user_id?: string | null
        }
        Update: {
          access_type?: Database["public"]["Enums"]["dev_access_type"]
          company_id?: string | null
          granted_at?: string
          granted_by?: string | null
          id?: string
          module_key?: string
          notes?: string | null
          revoked_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "module_dev_access_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_dev_access_module_key_fkey"
            columns: ["module_key"]
            isOneToOne: false
            referencedRelation: "module_registry"
            referencedColumns: ["module_key"]
          },
          {
            foreignKeyName: "module_dev_access_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      module_registry: {
        Row: {
          admin_notes: string | null
          availability_tier: Database["public"]["Enums"]["module_availability_tier"]
          created_at: string
          cta_text: string | null
          cta_url: string | null
          description: string | null
          display_name: string
          icon_key: string | null
          id: string
          is_default_enabled: boolean
          module_key: string
          sort_order: number
          tier_labels: Json | null
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          availability_tier?: Database["public"]["Enums"]["module_availability_tier"]
          created_at?: string
          cta_text?: string | null
          cta_url?: string | null
          description?: string | null
          display_name: string
          icon_key?: string | null
          id?: string
          is_default_enabled?: boolean
          module_key: string
          sort_order?: number
          tier_labels?: Json | null
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          availability_tier?: Database["public"]["Enums"]["module_availability_tier"]
          created_at?: string
          cta_text?: string | null
          cta_url?: string | null
          description?: string | null
          display_name?: string
          icon_key?: string | null
          id?: string
          is_default_enabled?: boolean
          module_key?: string
          sort_order?: number
          tier_labels?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      permissions: {
        Row: {
          description: string | null
          id: string
          module_key: string | null
          permission_code: string
        }
        Insert: {
          description?: string | null
          id?: string
          module_key?: string | null
          permission_code: string
        }
        Update: {
          description?: string | null
          id?: string
          module_key?: string | null
          permission_code?: string
        }
        Relationships: []
      }
      platform_crew_required_fields: {
        Row: {
          created_at: string
          custom_field_id: string | null
          field_key: string
          field_label: string
          field_type: Database["public"]["Enums"]["crew_field_type"]
          help_text: string | null
          id: string
          is_required: boolean
          sort_order: number
          updated_at: string
          updated_by: string | null
          wizard_step: string
        }
        Insert: {
          created_at?: string
          custom_field_id?: string | null
          field_key: string
          field_label: string
          field_type: Database["public"]["Enums"]["crew_field_type"]
          help_text?: string | null
          id?: string
          is_required?: boolean
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
          wizard_step: string
        }
        Update: {
          created_at?: string
          custom_field_id?: string | null
          field_key?: string
          field_label?: string
          field_type?: Database["public"]["Enums"]["crew_field_type"]
          help_text?: string | null
          id?: string
          is_required?: boolean
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
          wizard_step?: string
        }
        Relationships: [
          {
            foreignKeyName: "platform_crew_required_fields_custom_field_id_fkey"
            columns: ["custom_field_id"]
            isOneToOne: false
            referencedRelation: "crew_profile_field_definitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_crew_required_fields_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_defaults: {
        Row: {
          description: string | null
          id: string
          module_key: string
          settings: Json
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          module_key: string
          settings?: Json
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          module_key?: string
          settings?: Json
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      platform_library_seeds: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          item_type: string
          label: string
          metadata: Json
          module_key: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          item_type: string
          label: string
          metadata?: Json
          module_key: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          item_type?: string
          label?: string
          metadata?: Json
          module_key?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      platform_settings: {
        Row: {
          description: string | null
          id: string
          key: string
          updated_at: string
          updated_by: string | null
          value: Json
        }
        Insert: {
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Update: {
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Relationships: []
      }
      platform_skill_catalog: {
        Row: {
          aliases: string[] | null
          content_version: number
          created_at: string
          created_by: string | null
          deleted_at: string | null
          description: string | null
          icon: string | null
          id: string
          is_active: boolean
          label: string
          node_type: Database["public"]["Enums"]["skill_node_type"]
          parent_id: string | null
          slug: string
          sort_order: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          aliases?: string[] | null
          content_version?: number
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          label: string
          node_type: Database["public"]["Enums"]["skill_node_type"]
          parent_id?: string | null
          slug: string
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          aliases?: string[] | null
          content_version?: number
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          label?: string
          node_type?: Database["public"]["Enums"]["skill_node_type"]
          parent_id?: string | null
          slug?: string
          sort_order?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_skill_catalog_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_skill_catalog_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "platform_skill_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_skill_catalog_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_skill_catalog_suggestions: {
        Row: {
          created_at: string
          first_suggested_by: string | null
          id: string
          label: string
          normalized_label: string
          promoted_to_catalog_id: string | null
          review_notes: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: Database["public"]["Enums"]["skill_suggestion_status"]
          suggested_parent_id: string | null
          updated_at: string
          usage_count: number
        }
        Insert: {
          created_at?: string
          first_suggested_by?: string | null
          id?: string
          label: string
          normalized_label: string
          promoted_to_catalog_id?: string | null
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["skill_suggestion_status"]
          suggested_parent_id?: string | null
          updated_at?: string
          usage_count?: number
        }
        Update: {
          created_at?: string
          first_suggested_by?: string | null
          id?: string
          label?: string
          normalized_label?: string
          promoted_to_catalog_id?: string | null
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["skill_suggestion_status"]
          suggested_parent_id?: string | null
          updated_at?: string
          usage_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "platform_skill_catalog_suggestions_first_suggested_by_fkey"
            columns: ["first_suggested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_skill_catalog_suggestions_promoted_to_catalog_id_fkey"
            columns: ["promoted_to_catalog_id"]
            isOneToOne: false
            referencedRelation: "platform_skill_catalog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_skill_catalog_suggestions_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_skill_catalog_suggestions_suggested_parent_id_fkey"
            columns: ["suggested_parent_id"]
            isOneToOne: false
            referencedRelation: "platform_skill_catalog"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_sort_key_health: {
        Row: {
          id: string
          longest_key_len: number
          parent_id: string | null
          scan_run_id: string
          scanned_at: string
          severity: string
          sibling_count: number
          table_name: string
        }
        Insert: {
          id?: string
          longest_key_len: number
          parent_id?: string | null
          scan_run_id: string
          scanned_at?: string
          severity: string
          sibling_count: number
          table_name: string
        }
        Update: {
          id?: string
          longest_key_len?: number
          parent_id?: string | null
          scan_run_id?: string
          scanned_at?: string
          severity?: string
          sibling_count?: number
          table_name?: string
        }
        Relationships: []
      }
      post_it_notes: {
        Row: {
          colour: string
          company_id: string
          content: string
          converted_to_task: boolean
          created_at: string
          created_by: string
          deleted_at: string | null
          id: string
          project_id: string
          resolved_at: string | null
          resolved_by: string | null
          sort_order: number
          status: string
          target_id: string
          target_type: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          colour?: string
          company_id: string
          content?: string
          converted_to_task?: boolean
          created_at?: string
          created_by: string
          deleted_at?: string | null
          id?: string
          project_id: string
          resolved_at?: string | null
          resolved_by?: string | null
          sort_order?: number
          status?: string
          target_id: string
          target_type: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          colour?: string
          company_id?: string
          content?: string
          converted_to_task?: boolean
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          id?: string
          project_id?: string
          resolved_at?: string | null
          resolved_by?: string | null
          sort_order?: number
          status?: string
          target_id?: string
          target_type?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_it_notes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_it_notes_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_it_notes_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_it_notes_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_it_notes_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          email: string | null
          id: string
          identity_status: Database["public"]["Enums"]["identity_status"]
          phone: string | null
          show_help_tooltips: boolean
          text_size: Database["public"]["Enums"]["text_size_preference"]
          updated_at: string
          user_type: Database["public"]["Enums"]["user_type"]
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id: string
          identity_status?: Database["public"]["Enums"]["identity_status"]
          phone?: string | null
          show_help_tooltips?: boolean
          text_size?: Database["public"]["Enums"]["text_size_preference"]
          updated_at?: string
          user_type?: Database["public"]["Enums"]["user_type"]
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id?: string
          identity_status?: Database["public"]["Enums"]["identity_status"]
          phone?: string | null
          show_help_tooltips?: boolean
          text_size?: Database["public"]["Enums"]["text_size_preference"]
          updated_at?: string
          user_type?: Database["public"]["Enums"]["user_type"]
        }
        Relationships: []
      }
      project_agencies: {
        Row: {
          agency_id: string
          company_id: string
          created_at: string
          id: string
          project_id: string
          role_label: string
          sort_order: number
        }
        Insert: {
          agency_id: string
          company_id: string
          created_at?: string
          id?: string
          project_id: string
          role_label?: string
          sort_order?: number
        }
        Update: {
          agency_id?: string
          company_id?: string
          created_at?: string
          id?: string
          project_id?: string
          role_label?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_agencies_agency_id_fkey"
            columns: ["agency_id"]
            isOneToOne: false
            referencedRelation: "company_agencies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_agencies_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_agencies_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_client_viewers: {
        Row: {
          access_token: string
          added_by: string
          company_id: string
          created_at: string
          display_name: string | null
          email: string
          id: string
          project_id: string
          revoked_at: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          access_token?: string
          added_by: string
          company_id: string
          created_at?: string
          display_name?: string | null
          email: string
          id?: string
          project_id: string
          revoked_at?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          access_token?: string
          added_by?: string
          company_id?: string
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          project_id?: string
          revoked_at?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_client_viewers_added_by_fkey"
            columns: ["added_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_client_viewers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_client_viewers_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_client_viewers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      project_clients: {
        Row: {
          client_id: string
          company_id: string
          created_at: string
          id: string
          project_id: string
          role_label: string
          sort_order: number
        }
        Insert: {
          client_id: string
          company_id: string
          created_at?: string
          id?: string
          project_id: string
          role_label?: string
          sort_order?: number
        }
        Update: {
          client_id?: string
          company_id?: string
          created_at?: string
          id?: string
          project_id?: string
          role_label?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_clients_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "company_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_clients_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_clients_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_colour_tags: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          hex_colour: string
          id: string
          label: string
          module_key: string | null
          project_id: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          hex_colour?: string
          id?: string
          label: string
          module_key?: string | null
          project_id: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          hex_colour?: string
          id?: string
          label?: string
          module_key?: string | null
          project_id?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_colour_tags_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_colour_tags_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_colour_tags_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_email_templates: {
        Row: {
          banner_image_url: string | null
          company_id: string
          created_at: string
          created_by: string | null
          cta_label: string | null
          id: string
          intro_markdown: string | null
          is_enabled: boolean
          outro_markdown: string | null
          preview_text: string | null
          project_id: string
          signoff: string | null
          subject: string | null
          template_name: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          banner_image_url?: string | null
          company_id: string
          created_at?: string
          created_by?: string | null
          cta_label?: string | null
          id?: string
          intro_markdown?: string | null
          is_enabled?: boolean
          outro_markdown?: string | null
          preview_text?: string | null
          project_id: string
          signoff?: string | null
          subject?: string | null
          template_name: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          banner_image_url?: string | null
          company_id?: string
          created_at?: string
          created_by?: string | null
          cta_label?: string | null
          id?: string
          intro_markdown?: string | null
          is_enabled?: boolean
          outro_markdown?: string | null
          preview_text?: string | null
          project_id?: string
          signoff?: string | null
          subject?: string | null
          template_name?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_email_templates_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_email_templates_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_key_personnel: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          display_name: string | null
          email: string | null
          id: string
          phone: string | null
          photo_url: string | null
          profile_id: string | null
          project_id: string
          role_title: string
          sort_order: number
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          phone?: string | null
          photo_url?: string | null
          profile_id?: string | null
          project_id: string
          role_title?: string
          sort_order?: number
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          phone?: string | null
          photo_url?: string | null
          profile_id?: string | null
          project_id?: string
          role_title?: string
          sort_order?: number
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_key_personnel_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_key_personnel_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_key_personnel_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_key_personnel_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_key_personnel_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          description: string | null
          end_date: string | null
          id: string
          settings: Json | null
          start_date: string | null
          status: Database["public"]["Enums"]["project_status"]
          timezone: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          settings?: Json | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          timezone?: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          settings?: Json | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["project_status"]
          timezone?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      published_outputs: {
        Row: {
          company_id: string
          created_at: string
          id: string
          is_published: boolean
          module_key: string
          project_id: string
          published_at: string | null
          published_by: string | null
          section_id: string | null
          section_label: string | null
          updated_at: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          is_published?: boolean
          module_key: string
          project_id: string
          published_at?: string | null
          published_by?: string | null
          section_id?: string | null
          section_label?: string | null
          updated_at?: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          is_published?: boolean
          module_key?: string
          project_id?: string
          published_at?: string | null
          published_by?: string | null
          section_id?: string | null
          section_label?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "published_outputs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_outputs_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_outputs_published_by_fkey"
            columns: ["published_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      published_snapshots: {
        Row: {
          company_id: string
          created_at: string
          id: string
          included_stages: string[]
          is_active: boolean
          module_key: string
          project_id: string
          published_at: string
          published_by: string | null
          snapshot_data: Json
          version: number
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          included_stages?: string[]
          is_active?: boolean
          module_key: string
          project_id: string
          published_at?: string
          published_by?: string | null
          snapshot_data?: Json
          version?: number
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          included_stages?: string[]
          is_active?: boolean
          module_key?: string
          project_id?: string
          published_at?: string
          published_by?: string | null
          snapshot_data?: Json
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "published_snapshots_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_snapshots_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_snapshots_published_by_fkey"
            columns: ["published_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          access: Database["public"]["Enums"]["access_level"]
          id: string
          permission_id: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          access?: Database["public"]["Enums"]["access_level"]
          id?: string
          permission_id: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          access?: Database["public"]["Enums"]["access_level"]
          id?: string
          permission_id?: string
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
        ]
      }
      route_stops: {
        Row: {
          actual_arrival: string | null
          actual_departure: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          delivery_route_id: string
          estimated_duration_minutes: number | null
          id: string
          location_id: string
          location_type: Database["public"]["Enums"]["route_endpoint_type"]
          scheduled_date: string | null
          scheduled_time: string | null
          sort_order: number
          stop_notes: string | null
          stop_type: Database["public"]["Enums"]["route_stop_type"]
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          actual_arrival?: string | null
          actual_departure?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          delivery_route_id: string
          estimated_duration_minutes?: number | null
          id?: string
          location_id: string
          location_type: Database["public"]["Enums"]["route_endpoint_type"]
          scheduled_date?: string | null
          scheduled_time?: string | null
          sort_order?: number
          stop_notes?: string | null
          stop_type: Database["public"]["Enums"]["route_stop_type"]
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          actual_arrival?: string | null
          actual_departure?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          delivery_route_id?: string
          estimated_duration_minutes?: number | null
          id?: string
          location_id?: string
          location_type?: Database["public"]["Enums"]["route_endpoint_type"]
          scheduled_date?: string | null
          scheduled_time?: string | null
          sort_order?: number
          stop_notes?: string | null
          stop_type?: Database["public"]["Enums"]["route_stop_type"]
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "route_stops_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "route_stops_delivery_route_id_fkey"
            columns: ["delivery_route_id"]
            isOneToOne: false
            referencedRelation: "delivery_routes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "route_stops_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_display_overrides: {
        Row: {
          created_at: string
          display_colour: string | null
          display_group: string | null
          display_label: string | null
          id: string
          include_in_summary: boolean
          schedule_item_id: string
          schedule_notes: string | null
          show_in_client_view: boolean
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_colour?: string | null
          display_group?: string | null
          display_label?: string | null
          id?: string
          include_in_summary?: boolean
          schedule_item_id: string
          schedule_notes?: string | null
          show_in_client_view?: boolean
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_colour?: string | null
          display_group?: string | null
          display_label?: string | null
          id?: string
          include_in_summary?: boolean
          schedule_item_id?: string
          schedule_notes?: string | null
          show_in_client_view?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedule_display_overrides_schedule_item_id_fkey"
            columns: ["schedule_item_id"]
            isOneToOne: false
            referencedRelation: "schedule_items"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_groups: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          display_label_override: string | null
          id: string
          is_default: boolean
          linked_module: string | null
          parent_group_id: string | null
          parent_id: string
          project_id: string
          sort_key: string
          tier_level: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          display_label_override?: string | null
          id?: string
          is_default?: boolean
          linked_module?: string | null
          parent_group_id?: string | null
          parent_id: string
          project_id: string
          sort_key: string
          tier_level?: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          display_label_override?: string | null
          id?: string
          is_default?: boolean
          linked_module?: string | null
          parent_group_id?: string | null
          parent_id?: string
          project_id?: string
          sort_key?: string
          tier_level?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedule_groups_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_groups_parent_group_id_fkey"
            columns: ["parent_group_id"]
            isOneToOne: false
            referencedRelation: "schedule_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_groups_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "schedule_tables"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_groups_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_items: {
        Row: {
          created_at: string
          created_by: string
          date: string | null
          deleted_at: string | null
          description: string | null
          display_label_override: string | null
          end_date: string | null
          end_time: string | null
          id: string
          is_all_day: boolean
          is_key_timing: boolean
          item_type: Database["public"]["Enums"]["schedule_item_type"]
          parent_id: string | null
          schedule_id: string
          sort_key: string
          start_time: string | null
          status: Database["public"]["Enums"]["schedule_item_status"]
          tier_level: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          created_at?: string
          created_by: string
          date?: string | null
          deleted_at?: string | null
          description?: string | null
          display_label_override?: string | null
          end_date?: string | null
          end_time?: string | null
          id?: string
          is_all_day?: boolean
          is_key_timing?: boolean
          item_type: Database["public"]["Enums"]["schedule_item_type"]
          parent_id?: string | null
          schedule_id: string
          sort_key: string
          start_time?: string | null
          status?: Database["public"]["Enums"]["schedule_item_status"]
          tier_level?: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          created_at?: string
          created_by?: string
          date?: string | null
          deleted_at?: string | null
          description?: string | null
          display_label_override?: string | null
          end_date?: string | null
          end_time?: string | null
          id?: string
          is_all_day?: boolean
          is_key_timing?: boolean
          item_type?: Database["public"]["Enums"]["schedule_item_type"]
          parent_id?: string | null
          schedule_id?: string
          sort_key?: string
          start_time?: string | null
          status?: Database["public"]["Enums"]["schedule_item_status"]
          tier_level?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedule_items_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_items_schedule_root_id_fkey"
            columns: ["schedule_id"]
            isOneToOne: false
            referencedRelation: "schedule_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_items_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_linked_projections: {
        Row: {
          created_at: string
          id: string
          schedule_item_id: string
          source_module: string
          source_record_id: string
          sync_status: Database["public"]["Enums"]["sync_status"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          schedule_item_id: string
          source_module: string
          source_record_id: string
          sync_status?: Database["public"]["Enums"]["sync_status"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          schedule_item_id?: string
          source_module?: string
          source_record_id?: string
          sync_status?: Database["public"]["Enums"]["sync_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedule_linked_projections_schedule_item_id_fkey"
            columns: ["schedule_item_id"]
            isOneToOne: false
            referencedRelation: "schedule_items"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_published_views: {
        Row: {
          id: string
          is_issued: boolean
          published_at: string
          published_by: string
          schedule_id: string
          snapshot_data: Json
          superseded: boolean
          superseded_by: string | null
          supersedes: string | null
          version_label: string | null
        }
        Insert: {
          id?: string
          is_issued?: boolean
          published_at?: string
          published_by: string
          schedule_id: string
          snapshot_data: Json
          superseded?: boolean
          superseded_by?: string | null
          supersedes?: string | null
          version_label?: string | null
        }
        Update: {
          id?: string
          is_issued?: boolean
          published_at?: string
          published_by?: string
          schedule_id?: string
          snapshot_data?: Json
          superseded?: boolean
          superseded_by?: string | null
          supersedes?: string | null
          version_label?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "schedule_published_views_published_by_fkey"
            columns: ["published_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_published_views_superseded_by_fkey"
            columns: ["superseded_by"]
            isOneToOne: false
            referencedRelation: "schedule_published_views"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_published_views_supersedes_fkey"
            columns: ["supersedes"]
            isOneToOne: false
            referencedRelation: "schedule_published_views"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_root: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          display_label_override: string | null
          end_date: string | null
          id: string
          is_master: boolean
          multi_hour_anchor_time: string | null
          project_id: string
          receives_projections: boolean
          sort_key: string
          start_date: string | null
          status: string
          tier_level: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          display_label_override?: string | null
          end_date?: string | null
          id?: string
          is_master?: boolean
          multi_hour_anchor_time?: string | null
          project_id: string
          receives_projections?: boolean
          sort_key: string
          start_date?: string | null
          status?: string
          tier_level?: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          display_label_override?: string | null
          end_date?: string | null
          id?: string
          is_master?: boolean
          multi_hour_anchor_time?: string | null
          project_id?: string
          receives_projections?: boolean
          sort_key?: string
          start_date?: string | null
          status?: string
          tier_level?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedule_root_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_root_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_row_context_orders: {
        Row: {
          company_id: string
          context_id: string
          context_kind: string
          created_at: string
          created_by: string | null
          id: string
          project_id: string
          row_id: string
          sort_key: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          company_id: string
          context_id: string
          context_kind: string
          created_at?: string
          created_by?: string | null
          id?: string
          project_id: string
          row_id: string
          sort_key: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          company_id?: string
          context_id?: string
          context_kind?: string
          created_at?: string
          created_by?: string | null
          id?: string
          project_id?: string
          row_id?: string
          sort_key?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "schedule_row_context_orders_row_id_fkey"
            columns: ["row_id"]
            isOneToOne: false
            referencedRelation: "schedule_rows"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_row_links: {
        Row: {
          company_id: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          project_id: string
          sort_key: string
          source_row_id: string
          target_parent_id: string
          target_parent_kind: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          project_id: string
          sort_key: string
          source_row_id: string
          target_parent_id: string
          target_parent_kind: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          project_id?: string
          sort_key?: string
          source_row_id?: string
          target_parent_id?: string
          target_parent_kind?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "schedule_row_links_source_row_id_fkey"
            columns: ["source_row_id"]
            isOneToOne: false
            referencedRelation: "schedule_rows"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_rows: {
        Row: {
          created_at: string
          created_by: string
          deleted_at: string | null
          description: string | null
          display_label_override: string | null
          id: string
          parent_id: string | null
          schedule_id: string
          sort_key: string
          tier_level: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          created_at?: string
          created_by: string
          deleted_at?: string | null
          description?: string | null
          display_label_override?: string | null
          id?: string
          parent_id?: string | null
          schedule_id: string
          sort_key: string
          tier_level?: string
          title?: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          description?: string | null
          display_label_override?: string | null
          id?: string
          parent_id?: string | null
          schedule_id?: string
          sort_key?: string
          tier_level?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedule_rows_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_rows_schedule_root_id_fkey"
            columns: ["schedule_id"]
            isOneToOne: false
            referencedRelation: "schedule_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_rows_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_tables: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          display_label_override: string | null
          id: string
          is_default: boolean
          linked_module: string | null
          parent_id: string
          project_id: string
          show_item_details: boolean | null
          sort_key: string
          tier_level: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          display_label_override?: string | null
          id?: string
          is_default?: boolean
          linked_module?: string | null
          parent_id: string
          project_id: string
          show_item_details?: boolean | null
          sort_key: string
          tier_level?: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          display_label_override?: string | null
          id?: string
          is_default?: boolean
          linked_module?: string | null
          parent_id?: string
          project_id?: string
          show_item_details?: boolean | null
          sort_key?: string
          tier_level?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedule_tables_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_tables_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "schedule_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_tables_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_validation_results: {
        Row: {
          evaluated_at: string
          id: string
          is_overridden: boolean
          message: string
          overridden_by: string | null
          override_reason: string | null
          rule_code: string
          schedule_item_id: string
          severity: Database["public"]["Enums"]["validation_severity"]
        }
        Insert: {
          evaluated_at?: string
          id?: string
          is_overridden?: boolean
          message: string
          overridden_by?: string | null
          override_reason?: string | null
          rule_code: string
          schedule_item_id: string
          severity: Database["public"]["Enums"]["validation_severity"]
        }
        Update: {
          evaluated_at?: string
          id?: string
          is_overridden?: boolean
          message?: string
          overridden_by?: string | null
          override_reason?: string | null
          rule_code?: string
          schedule_item_id?: string
          severity?: Database["public"]["Enums"]["validation_severity"]
        }
        Relationships: [
          {
            foreignKeyName: "schedule_validation_results_overridden_by_fkey"
            columns: ["overridden_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedule_validation_results_schedule_item_id_fkey"
            columns: ["schedule_item_id"]
            isOneToOne: false
            referencedRelation: "schedule_items"
            referencedColumns: ["id"]
          },
        ]
      }
      security_logs: {
        Row: {
          action: string
          actor_role: string
          actor_username: string
          device_info: string | null
          id: string
          ip_address: unknown
          metadata: Json | null
          method: string | null
          request_body: Json | null
          response_status: string | null
          route: string | null
          timestamp: string
          user_agent: string | null
        }
        Insert: {
          action: string
          actor_role: string
          actor_username: string
          device_info?: string | null
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          method?: string | null
          request_body?: Json | null
          response_status?: string | null
          route?: string | null
          timestamp?: string
          user_agent?: string | null
        }
        Update: {
          action?: string
          actor_role?: string
          actor_username?: string
          device_info?: string | null
          id?: string
          ip_address?: unknown
          metadata?: Json | null
          method?: string | null
          request_body?: Json | null
          response_status?: string | null
          route?: string | null
          timestamp?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      staff_availability_request_recipients: {
        Row: {
          ad_hoc_display_name: string | null
          ad_hoc_email: string | null
          company_id: string
          created_at: string
          created_by: string | null
          crew_profile_id: string | null
          deleted_at: string | null
          email_dispatched_at: string | null
          email_last_error: string | null
          id: string
          project_id: string
          promote_role_mismatch_override: boolean
          promoted_at: string | null
          promoted_by: string | null
          promoted_shift_id: string | null
          recipient_kind: Database["public"]["Enums"]["availability_recipient_kind"]
          request_id: string
          responded_at: string | null
          response_note: string | null
          response_source:
            | Database["public"]["Enums"]["availability_response_source"]
            | null
          response_state: Database["public"]["Enums"]["availability_response_state"]
          updated_at: string
          updated_by: string | null
          withdrawn_at: string | null
          withdrawn_by: string | null
        }
        Insert: {
          ad_hoc_display_name?: string | null
          ad_hoc_email?: string | null
          company_id: string
          created_at?: string
          created_by?: string | null
          crew_profile_id?: string | null
          deleted_at?: string | null
          email_dispatched_at?: string | null
          email_last_error?: string | null
          id?: string
          project_id: string
          promote_role_mismatch_override?: boolean
          promoted_at?: string | null
          promoted_by?: string | null
          promoted_shift_id?: string | null
          recipient_kind: Database["public"]["Enums"]["availability_recipient_kind"]
          request_id: string
          responded_at?: string | null
          response_note?: string | null
          response_source?:
            | Database["public"]["Enums"]["availability_response_source"]
            | null
          response_state?: Database["public"]["Enums"]["availability_response_state"]
          updated_at?: string
          updated_by?: string | null
          withdrawn_at?: string | null
          withdrawn_by?: string | null
        }
        Update: {
          ad_hoc_display_name?: string | null
          ad_hoc_email?: string | null
          company_id?: string
          created_at?: string
          created_by?: string | null
          crew_profile_id?: string | null
          deleted_at?: string | null
          email_dispatched_at?: string | null
          email_last_error?: string | null
          id?: string
          project_id?: string
          promote_role_mismatch_override?: boolean
          promoted_at?: string | null
          promoted_by?: string | null
          promoted_shift_id?: string | null
          recipient_kind?: Database["public"]["Enums"]["availability_recipient_kind"]
          request_id?: string
          responded_at?: string | null
          response_note?: string | null
          response_source?:
            | Database["public"]["Enums"]["availability_response_source"]
            | null
          response_state?: Database["public"]["Enums"]["availability_response_state"]
          updated_at?: string
          updated_by?: string | null
          withdrawn_at?: string | null
          withdrawn_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_availability_request_recipients_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_recipients_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_recipients_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_recipients_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_recipients_promoted_by_fkey"
            columns: ["promoted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_recipients_promoted_shift_id_fkey"
            columns: ["promoted_shift_id"]
            isOneToOne: false
            referencedRelation: "staff_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_recipients_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "staff_availability_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_recipients_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_recipients_withdrawn_by_fkey"
            columns: ["withdrawn_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_availability_request_shifts: {
        Row: {
          company_id: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          id: string
          project_id: string
          request_id: string
          shift_id: string
          sort_key: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          project_id: string
          request_id: string
          shift_id: string
          sort_key: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          id?: string
          project_id?: string
          request_id?: string
          shift_id?: string
          sort_key?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_availability_request_shifts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_shifts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_shifts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_shifts_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "staff_availability_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_shifts_shift_id_fkey"
            columns: ["shift_id"]
            isOneToOne: false
            referencedRelation: "staff_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_request_shifts_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_availability_requests: {
        Row: {
          closed_at: string | null
          closed_by: string | null
          company_id: string
          copy_paste_format:
            | Database["public"]["Enums"]["availability_request_format"]
            | null
          created_at: string
          created_by: string | null
          crew_call_id: string
          deleted_at: string | null
          delivery_mode: Database["public"]["Enums"]["availability_request_delivery_mode"]
          expires_at: string | null
          id: string
          job_status: Database["public"]["Enums"]["availability_request_job_status"]
          message: string | null
          project_id: string
          recipient_filter: Json | null
          request_type: Database["public"]["Enums"]["availability_request_type"]
          sent_at: string | null
          sort_key: string
          state: Database["public"]["Enums"]["availability_request_state"]
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          closed_at?: string | null
          closed_by?: string | null
          company_id: string
          copy_paste_format?:
            | Database["public"]["Enums"]["availability_request_format"]
            | null
          created_at?: string
          created_by?: string | null
          crew_call_id: string
          deleted_at?: string | null
          delivery_mode: Database["public"]["Enums"]["availability_request_delivery_mode"]
          expires_at?: string | null
          id?: string
          job_status: Database["public"]["Enums"]["availability_request_job_status"]
          message?: string | null
          project_id: string
          recipient_filter?: Json | null
          request_type: Database["public"]["Enums"]["availability_request_type"]
          sent_at?: string | null
          sort_key: string
          state?: Database["public"]["Enums"]["availability_request_state"]
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          closed_at?: string | null
          closed_by?: string | null
          company_id?: string
          copy_paste_format?:
            | Database["public"]["Enums"]["availability_request_format"]
            | null
          created_at?: string
          created_by?: string | null
          crew_call_id?: string
          deleted_at?: string | null
          delivery_mode?: Database["public"]["Enums"]["availability_request_delivery_mode"]
          expires_at?: string | null
          id?: string
          job_status?: Database["public"]["Enums"]["availability_request_job_status"]
          message?: string | null
          project_id?: string
          recipient_filter?: Json | null
          request_type?: Database["public"]["Enums"]["availability_request_type"]
          sent_at?: string | null
          sort_key?: string
          state?: Database["public"]["Enums"]["availability_request_state"]
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_availability_requests_closed_by_fkey"
            columns: ["closed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_requests_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_requests_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_requests_crew_call_id_fkey"
            columns: ["crew_call_id"]
            isOneToOne: false
            referencedRelation: "staff_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_requests_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_requests_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_availability_response_tokens: {
        Row: {
          company_id: string
          consumed_at: string | null
          consumed_response:
            | Database["public"]["Enums"]["availability_response_state"]
            | null
          created_at: string
          expires_at: string
          id: string
          invalidated_at: string | null
          invalidated_reason: string | null
          ip_hash: string | null
          issued_at: string
          issued_for: string
          project_id: string
          recipient_id: string
          request_id: string
          token: string
          user_agent: string | null
        }
        Insert: {
          company_id: string
          consumed_at?: string | null
          consumed_response?:
            | Database["public"]["Enums"]["availability_response_state"]
            | null
          created_at?: string
          expires_at: string
          id?: string
          invalidated_at?: string | null
          invalidated_reason?: string | null
          ip_hash?: string | null
          issued_at?: string
          issued_for: string
          project_id: string
          recipient_id: string
          request_id: string
          token: string
          user_agent?: string | null
        }
        Update: {
          company_id?: string
          consumed_at?: string | null
          consumed_response?:
            | Database["public"]["Enums"]["availability_response_state"]
            | null
          created_at?: string
          expires_at?: string
          id?: string
          invalidated_at?: string | null
          invalidated_reason?: string | null
          ip_hash?: string | null
          issued_at?: string
          issued_for?: string
          project_id?: string
          recipient_id?: string
          request_id?: string
          token?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_availability_response_tokens_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_response_tokens_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_response_tokens_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "staff_availability_request_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_availability_response_tokens_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "staff_availability_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_crew_members: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          crew_profile_id: string | null
          deleted_at: string | null
          display_name: string
          email: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          id: string
          is_from_library: boolean
          library_source_id: string | null
          notes: string | null
          phone: string | null
          project_id: string | null
          status: Database["public"]["Enums"]["staff_member_status"]
          updated_at: string
          updated_by: string
          user_id: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          crew_profile_id?: string | null
          deleted_at?: string | null
          display_name: string
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          id?: string
          is_from_library?: boolean
          library_source_id?: string | null
          notes?: string | null
          phone?: string | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["staff_member_status"]
          updated_at?: string
          updated_by: string
          user_id?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          crew_profile_id?: string | null
          deleted_at?: string | null
          display_name?: string
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          id?: string
          is_from_library?: boolean
          library_source_id?: string | null
          notes?: string | null
          phone?: string | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["staff_member_status"]
          updated_at?: string
          updated_by?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_crew_members_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_crew_members_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_crew_members_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_crew_members_library_source_id_fkey"
            columns: ["library_source_id"]
            isOneToOne: false
            referencedRelation: "staff_crew_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_crew_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_crew_members_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_crew_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_crew_role_assignments: {
        Row: {
          created_at: string
          crew_member_id: string
          id: string
          is_primary: boolean
          role_id: string
        }
        Insert: {
          created_at?: string
          crew_member_id: string
          id?: string
          is_primary?: boolean
          role_id: string
        }
        Update: {
          created_at?: string
          crew_member_id?: string
          id?: string
          is_primary?: boolean
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_crew_role_assignments_crew_member_id_fkey"
            columns: ["crew_member_id"]
            isOneToOne: false
            referencedRelation: "staff_crew_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_crew_role_assignments_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "staff_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_department_tags: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          description: string | null
          id: string
          is_from_library: boolean
          library_source_id: string | null
          name: string
          parent_department_id: string | null
          project_id: string | null
          sort_key: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          is_from_library?: boolean
          library_source_id?: string | null
          name: string
          parent_department_id?: string | null
          project_id?: string | null
          sort_key: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          is_from_library?: boolean
          library_source_id?: string | null
          name?: string
          parent_department_id?: string | null
          project_id?: string | null
          sort_key?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_departments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_departments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_departments_library_source_id_fkey"
            columns: ["library_source_id"]
            isOneToOne: false
            referencedRelation: "staff_department_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_departments_parent_department_id_fkey"
            columns: ["parent_department_id"]
            isOneToOne: false
            referencedRelation: "staff_department_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_departments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_departments_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_groups: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          department_id: string | null
          description: string | null
          id: string
          is_from_library: boolean
          library_source_id: string | null
          name: string
          parent_group_id: string | null
          parent_id: string
          project_id: string | null
          sort_key: string
          tier_level: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          id?: string
          is_from_library?: boolean
          library_source_id?: string | null
          name: string
          parent_group_id?: string | null
          parent_id: string
          project_id?: string | null
          sort_key: string
          tier_level?: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          id?: string
          is_from_library?: boolean
          library_source_id?: string | null
          name?: string
          parent_group_id?: string | null
          parent_id?: string
          project_id?: string | null
          sort_key?: string
          tier_level?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_groups_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_groups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_groups_department_tag_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "staff_department_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_groups_library_source_id_fkey"
            columns: ["library_source_id"]
            isOneToOne: false
            referencedRelation: "staff_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_groups_parent_group_id_fkey"
            columns: ["parent_group_id"]
            isOneToOne: false
            referencedRelation: "staff_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_groups_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "staff_tables"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_groups_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_groups_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_items: {
        Row: {
          assignment_stage: Database["public"]["Enums"]["staff_assignment_stage"]
          break_duration_minutes: number | null
          cancellation_reason:
            | Database["public"]["Enums"]["staff_cancellation_reason"]
            | null
          cancellation_reason_text: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          company_id: string
          confirmation_expires_at: string | null
          confirmation_responded_at: string | null
          confirmation_sent_at: string | null
          created_at: string
          created_by: string
          crew_call_id: string | null
          crew_call_row_id: string | null
          crew_member_id: string | null
          date: string
          deleted_at: string | null
          department_id: string | null
          end_time: string
          free_text_department: string | null
          free_text_role: string | null
          id: string
          is_overtime: boolean
          is_published_to_live: boolean
          label: string | null
          last_renegotiated_at: string | null
          location_note: string | null
          overtime_rate_type:
            | Database["public"]["Enums"]["overtime_rate_type"]
            | null
          overtime_rate_value: number | null
          parent_id: string
          placeholder_id: string | null
          project_id: string
          renegotiation_count: number
          role_id: string | null
          shift_notes: string | null
          shift_pattern_id: string | null
          show_details_on_pill: boolean
          sort_key: string
          start_time: string
          tier_level: string
          unique_identifier: string | null
          updated_at: string
          updated_by: string
        }
        Insert: {
          assignment_stage?: Database["public"]["Enums"]["staff_assignment_stage"]
          break_duration_minutes?: number | null
          cancellation_reason?:
            | Database["public"]["Enums"]["staff_cancellation_reason"]
            | null
          cancellation_reason_text?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          company_id: string
          confirmation_expires_at?: string | null
          confirmation_responded_at?: string | null
          confirmation_sent_at?: string | null
          created_at?: string
          created_by: string
          crew_call_id?: string | null
          crew_call_row_id?: string | null
          crew_member_id?: string | null
          date: string
          deleted_at?: string | null
          department_id?: string | null
          end_time: string
          free_text_department?: string | null
          free_text_role?: string | null
          id?: string
          is_overtime?: boolean
          is_published_to_live?: boolean
          label?: string | null
          last_renegotiated_at?: string | null
          location_note?: string | null
          overtime_rate_type?:
            | Database["public"]["Enums"]["overtime_rate_type"]
            | null
          overtime_rate_value?: number | null
          parent_id: string
          placeholder_id?: string | null
          project_id: string
          renegotiation_count?: number
          role_id?: string | null
          shift_notes?: string | null
          shift_pattern_id?: string | null
          show_details_on_pill?: boolean
          sort_key: string
          start_time: string
          tier_level?: string
          unique_identifier?: string | null
          updated_at?: string
          updated_by: string
        }
        Update: {
          assignment_stage?: Database["public"]["Enums"]["staff_assignment_stage"]
          break_duration_minutes?: number | null
          cancellation_reason?:
            | Database["public"]["Enums"]["staff_cancellation_reason"]
            | null
          cancellation_reason_text?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          company_id?: string
          confirmation_expires_at?: string | null
          confirmation_responded_at?: string | null
          confirmation_sent_at?: string | null
          created_at?: string
          created_by?: string
          crew_call_id?: string | null
          crew_call_row_id?: string | null
          crew_member_id?: string | null
          date?: string
          deleted_at?: string | null
          department_id?: string | null
          end_time?: string
          free_text_department?: string | null
          free_text_role?: string | null
          id?: string
          is_overtime?: boolean
          is_published_to_live?: boolean
          label?: string | null
          last_renegotiated_at?: string | null
          location_note?: string | null
          overtime_rate_type?:
            | Database["public"]["Enums"]["overtime_rate_type"]
            | null
          overtime_rate_value?: number | null
          parent_id?: string
          placeholder_id?: string | null
          project_id?: string
          renegotiation_count?: number
          role_id?: string | null
          shift_notes?: string | null
          shift_pattern_id?: string | null
          show_details_on_pill?: boolean
          sort_key?: string
          start_time?: string
          tier_level?: string
          unique_identifier?: string | null
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_items_cancelled_by_fkey"
            columns: ["cancelled_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_crew_call_id_fkey"
            columns: ["crew_call_id"]
            isOneToOne: false
            referencedRelation: "staff_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_crew_call_row_id_fkey"
            columns: ["crew_call_row_id"]
            isOneToOne: false
            referencedRelation: "staff_rows"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_crew_member_id_fkey"
            columns: ["crew_member_id"]
            isOneToOne: false
            referencedRelation: "staff_crew_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_department_tag_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "staff_department_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_placeholder_id_fkey"
            columns: ["placeholder_id"]
            isOneToOne: false
            referencedRelation: "staff_preliminary_placeholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "staff_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_shift_pattern_id_fkey"
            columns: ["shift_pattern_id"]
            isOneToOne: false
            referencedRelation: "staff_shift_patterns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_items_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_notifications: {
        Row: {
          audience: Database["public"]["Enums"]["staff_notification_audience"]
          company_id: string
          created_at: string
          crew_call_id: string | null
          email_dispatched_at: string | null
          id: string
          kind: Database["public"]["Enums"]["staff_notification_kind"]
          payload: Json
          project_id: string
          read_at: string | null
          recipient_crew_member_id: string | null
          recipient_placeholder_id: string | null
          recipient_user_id: string | null
          shift_id: string | null
        }
        Insert: {
          audience: Database["public"]["Enums"]["staff_notification_audience"]
          company_id: string
          created_at?: string
          crew_call_id?: string | null
          email_dispatched_at?: string | null
          id?: string
          kind: Database["public"]["Enums"]["staff_notification_kind"]
          payload?: Json
          project_id: string
          read_at?: string | null
          recipient_crew_member_id?: string | null
          recipient_placeholder_id?: string | null
          recipient_user_id?: string | null
          shift_id?: string | null
        }
        Update: {
          audience?: Database["public"]["Enums"]["staff_notification_audience"]
          company_id?: string
          created_at?: string
          crew_call_id?: string | null
          email_dispatched_at?: string | null
          id?: string
          kind?: Database["public"]["Enums"]["staff_notification_kind"]
          payload?: Json
          project_id?: string
          read_at?: string | null
          recipient_crew_member_id?: string | null
          recipient_placeholder_id?: string | null
          recipient_user_id?: string | null
          shift_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_notifications_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_notifications_crew_call_id_fkey"
            columns: ["crew_call_id"]
            isOneToOne: false
            referencedRelation: "staff_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_notifications_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_notifications_recipient_crew_member_id_fkey"
            columns: ["recipient_crew_member_id"]
            isOneToOne: false
            referencedRelation: "staff_crew_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_notifications_recipient_placeholder_id_fkey"
            columns: ["recipient_placeholder_id"]
            isOneToOne: false
            referencedRelation: "staff_preliminary_placeholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_notifications_recipient_user_id_fkey"
            columns: ["recipient_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_notifications_shift_id_fkey"
            columns: ["shift_id"]
            isOneToOne: false
            referencedRelation: "staff_items"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_placeholder_link_suggestions: {
        Row: {
          company_id: string
          confirmed_at: string | null
          confirmed_by: string | null
          crew_profile_id: string
          dismissed_at: string | null
          dismissed_by: string | null
          id: string
          match_reason: string
          placeholder_id: string
          project_id: string
          suggested_at: string
        }
        Insert: {
          company_id: string
          confirmed_at?: string | null
          confirmed_by?: string | null
          crew_profile_id: string
          dismissed_at?: string | null
          dismissed_by?: string | null
          id?: string
          match_reason: string
          placeholder_id: string
          project_id: string
          suggested_at?: string
        }
        Update: {
          company_id?: string
          confirmed_at?: string | null
          confirmed_by?: string | null
          crew_profile_id?: string
          dismissed_at?: string | null
          dismissed_by?: string | null
          id?: string
          match_reason?: string
          placeholder_id?: string
          project_id?: string
          suggested_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_placeholder_link_suggestions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_placeholder_link_suggestions_confirmed_by_fkey"
            columns: ["confirmed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_placeholder_link_suggestions_crew_profile_id_fkey"
            columns: ["crew_profile_id"]
            isOneToOne: false
            referencedRelation: "crew_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_placeholder_link_suggestions_dismissed_by_fkey"
            columns: ["dismissed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_placeholder_link_suggestions_placeholder_id_fkey"
            columns: ["placeholder_id"]
            isOneToOne: false
            referencedRelation: "staff_preliminary_placeholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_placeholder_link_suggestions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_preliminary_placeholders: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          display_name: string
          email: string
          id: string
          normalized_name: string | null
          notes: string | null
          phone: string | null
          project_id: string
          promoted_at: string | null
          promoted_by: string | null
          promoted_to_crew_member_id: string | null
          requires_email_capture: boolean
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          display_name: string
          email: string
          id?: string
          normalized_name?: string | null
          notes?: string | null
          phone?: string | null
          project_id: string
          promoted_at?: string | null
          promoted_by?: string | null
          promoted_to_crew_member_id?: string | null
          requires_email_capture?: boolean
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          display_name?: string
          email?: string
          id?: string
          normalized_name?: string | null
          notes?: string | null
          phone?: string | null
          project_id?: string
          promoted_at?: string | null
          promoted_by?: string | null
          promoted_to_crew_member_id?: string | null
          requires_email_capture?: boolean
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_preliminary_placeholders_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_preliminary_placeholders_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_preliminary_placeholders_promoted_by_fkey"
            columns: ["promoted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_preliminary_placeholders_promoted_to_crew_member_id_fkey"
            columns: ["promoted_to_crew_member_id"]
            isOneToOne: false
            referencedRelation: "staff_crew_members"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_roles: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          department_id: string | null
          description: string | null
          id: string
          is_from_library: boolean
          library_source_id: string | null
          project_id: string | null
          resource_id: string | null
          sort_key: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          id?: string
          is_from_library?: boolean
          library_source_id?: string | null
          project_id?: string | null
          resource_id?: string | null
          sort_key: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          id?: string
          is_from_library?: boolean
          library_source_id?: string | null
          project_id?: string | null
          resource_id?: string | null
          sort_key?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_roles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_roles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_roles_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "staff_department_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_roles_library_source_id_fkey"
            columns: ["library_source_id"]
            isOneToOne: false
            referencedRelation: "staff_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_roles_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_roles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_root: {
        Row: {
          breakfast_end: string | null
          breakfast_start: string | null
          build_mode: string
          company_id: string
          count_breakfast: boolean
          count_dinner: boolean
          count_lunch: boolean
          created_at: string
          created_by: string
          default_included_stages: string[] | null
          default_shift_pattern_id: string | null
          deleted_at: string | null
          description: string | null
          dinner_end: string | null
          dinner_start: string | null
          end_date: string | null
          id: string
          last_synced_at: string | null
          lunch_end: string | null
          lunch_start: string | null
          meal_margin_direction: string
          meal_margin_minutes: number
          offer_expiry_hours: number | null
          project_id: string
          schedule_filter: Json | null
          schedule_group_id: string | null
          sort_key: string
          start_date: string | null
          sync_mode: Database["public"]["Enums"]["crew_call_sync_mode"]
          sync_status: Database["public"]["Enums"]["crew_call_sync_status"]
          tier_level: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          breakfast_end?: string | null
          breakfast_start?: string | null
          build_mode?: string
          company_id: string
          count_breakfast?: boolean
          count_dinner?: boolean
          count_lunch?: boolean
          created_at?: string
          created_by: string
          default_included_stages?: string[] | null
          default_shift_pattern_id?: string | null
          deleted_at?: string | null
          description?: string | null
          dinner_end?: string | null
          dinner_start?: string | null
          end_date?: string | null
          id?: string
          last_synced_at?: string | null
          lunch_end?: string | null
          lunch_start?: string | null
          meal_margin_direction?: string
          meal_margin_minutes?: number
          offer_expiry_hours?: number | null
          project_id: string
          schedule_filter?: Json | null
          schedule_group_id?: string | null
          sort_key: string
          start_date?: string | null
          sync_mode?: Database["public"]["Enums"]["crew_call_sync_mode"]
          sync_status?: Database["public"]["Enums"]["crew_call_sync_status"]
          tier_level?: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          breakfast_end?: string | null
          breakfast_start?: string | null
          build_mode?: string
          company_id?: string
          count_breakfast?: boolean
          count_dinner?: boolean
          count_lunch?: boolean
          created_at?: string
          created_by?: string
          default_included_stages?: string[] | null
          default_shift_pattern_id?: string | null
          deleted_at?: string | null
          description?: string | null
          dinner_end?: string | null
          dinner_start?: string | null
          end_date?: string | null
          id?: string
          last_synced_at?: string | null
          lunch_end?: string | null
          lunch_start?: string | null
          meal_margin_direction?: string
          meal_margin_minutes?: number
          offer_expiry_hours?: number | null
          project_id?: string
          schedule_filter?: Json | null
          schedule_group_id?: string | null
          sort_key?: string
          start_date?: string | null
          sync_mode?: Database["public"]["Enums"]["crew_call_sync_mode"]
          sync_status?: Database["public"]["Enums"]["crew_call_sync_status"]
          tier_level?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_root_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_root_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_root_default_shift_pattern_id_fkey"
            columns: ["default_shift_pattern_id"]
            isOneToOne: false
            referencedRelation: "staff_shift_patterns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_root_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_root_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_rows: {
        Row: {
          assignment_stage: Database["public"]["Enums"]["staff_assignment_stage"]
          company_id: string
          created_at: string
          created_by: string
          crew_call_id: string | null
          crew_member_id: string | null
          deleted_at: string | null
          department_id: string | null
          description: string | null
          id: string
          library_source_id: string | null
          notes: string | null
          parent_id: string
          project_id: string | null
          role_id: string | null
          sort_key: string
          tier_level: string
          unique_identifier: string | null
          updated_at: string
          updated_by: string
        }
        Insert: {
          assignment_stage?: Database["public"]["Enums"]["staff_assignment_stage"]
          company_id: string
          created_at?: string
          created_by: string
          crew_call_id?: string | null
          crew_member_id?: string | null
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          id?: string
          library_source_id?: string | null
          notes?: string | null
          parent_id: string
          project_id?: string | null
          role_id?: string | null
          sort_key: string
          tier_level?: string
          unique_identifier?: string | null
          updated_at?: string
          updated_by: string
        }
        Update: {
          assignment_stage?: Database["public"]["Enums"]["staff_assignment_stage"]
          company_id?: string
          created_at?: string
          created_by?: string
          crew_call_id?: string | null
          crew_member_id?: string | null
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          id?: string
          library_source_id?: string | null
          notes?: string | null
          parent_id?: string
          project_id?: string | null
          role_id?: string | null
          sort_key?: string
          tier_level?: string
          unique_identifier?: string | null
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_rows_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_rows_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_rows_crew_call_id_fkey"
            columns: ["crew_call_id"]
            isOneToOne: false
            referencedRelation: "staff_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_rows_crew_member_id_fkey"
            columns: ["crew_member_id"]
            isOneToOne: false
            referencedRelation: "staff_crew_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_rows_department_tag_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "staff_department_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_rows_library_source_id_fkey"
            columns: ["library_source_id"]
            isOneToOne: false
            referencedRelation: "staff_rows"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_rows_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "staff_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_rows_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_rows_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "staff_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_rows_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_shift_patterns: {
        Row: {
          break_duration_minutes: number | null
          colour: string | null
          company_id: string
          created_at: string
          created_by: string
          crew_call_id: string | null
          deleted_at: string | null
          end_time: string
          id: string
          is_default: boolean
          is_from_library: boolean
          last_propagated_at: string | null
          last_propagated_by: string | null
          library_source_id: string | null
          name: string
          project_id: string | null
          propagation_policy: Database["public"]["Enums"]["staff_pattern_propagation_policy"]
          sort_key: string
          start_time: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          break_duration_minutes?: number | null
          colour?: string | null
          company_id: string
          created_at?: string
          created_by: string
          crew_call_id?: string | null
          deleted_at?: string | null
          end_time: string
          id?: string
          is_default?: boolean
          is_from_library?: boolean
          last_propagated_at?: string | null
          last_propagated_by?: string | null
          library_source_id?: string | null
          name: string
          project_id?: string | null
          propagation_policy?: Database["public"]["Enums"]["staff_pattern_propagation_policy"]
          sort_key: string
          start_time: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          break_duration_minutes?: number | null
          colour?: string | null
          company_id?: string
          created_at?: string
          created_by?: string
          crew_call_id?: string | null
          deleted_at?: string | null
          end_time?: string
          id?: string
          is_default?: boolean
          is_from_library?: boolean
          last_propagated_at?: string | null
          last_propagated_by?: string | null
          library_source_id?: string | null
          name?: string
          project_id?: string | null
          propagation_policy?: Database["public"]["Enums"]["staff_pattern_propagation_policy"]
          sort_key?: string
          start_time?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_shift_patterns_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_shift_patterns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_shift_patterns_crew_call_id_fkey"
            columns: ["crew_call_id"]
            isOneToOne: false
            referencedRelation: "staff_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_shift_patterns_last_propagated_by_fkey"
            columns: ["last_propagated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_shift_patterns_library_source_id_fkey"
            columns: ["library_source_id"]
            isOneToOne: false
            referencedRelation: "staff_shift_patterns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_shift_patterns_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_shift_patterns_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_tables: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          crew_call_id: string
          deleted_at: string | null
          description: string | null
          id: string
          parent_id: string
          project_id: string
          sort_key: string
          tier_level: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          crew_call_id: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          parent_id: string
          project_id: string
          sort_key: string
          tier_level?: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          crew_call_id?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          parent_id?: string
          project_id?: string
          sort_key?: string
          tier_level?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_tables_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_tables_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_tables_crew_call_id_fkey"
            columns: ["crew_call_id"]
            isOneToOne: false
            referencedRelation: "staff_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_tables_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "staff_root"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_tables_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_tables_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          cancelled_at: string | null
          company_id: string
          created_at: string
          expires_at: string | null
          id: string
          metadata: Json | null
          module_key: string | null
          plan: string
          started_at: string
          status: Database["public"]["Enums"]["subscription_status"]
          updated_at: string
        }
        Insert: {
          cancelled_at?: string | null
          company_id: string
          created_at?: string
          expires_at?: string | null
          id?: string
          metadata?: Json | null
          module_key?: string | null
          plan?: string
          started_at?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
        }
        Update: {
          cancelled_at?: string | null
          company_id?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          metadata?: Json | null
          module_key?: string | null
          plan?: string
          started_at?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_addresses: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          city: string | null
          contact_name: string | null
          contact_phone: string | null
          country: string | null
          created_at: string
          created_by: string
          deleted_at: string | null
          delivery_instructions: string | null
          id: string
          is_primary: boolean
          label: string
          loading_bay_info: string | null
          max_vehicle_height_m: number | null
          max_vehicle_length_m: number | null
          max_vehicle_weight_t: number | null
          operating_hours_end: string | null
          operating_hours_start: string | null
          postal_code: string | null
          region: string | null
          sort_order: number
          supplier_id: string
          updated_at: string
          updated_by: string
          what3words: string | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          country?: string | null
          created_at?: string
          created_by: string
          deleted_at?: string | null
          delivery_instructions?: string | null
          id?: string
          is_primary?: boolean
          label: string
          loading_bay_info?: string | null
          max_vehicle_height_m?: number | null
          max_vehicle_length_m?: number | null
          max_vehicle_weight_t?: number | null
          operating_hours_end?: string | null
          operating_hours_start?: string | null
          postal_code?: string | null
          region?: string | null
          sort_order?: number
          supplier_id: string
          updated_at?: string
          updated_by: string
          what3words?: string | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          country?: string | null
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          delivery_instructions?: string | null
          id?: string
          is_primary?: boolean
          label?: string
          loading_bay_info?: string | null
          max_vehicle_height_m?: number | null
          max_vehicle_length_m?: number | null
          max_vehicle_weight_t?: number | null
          operating_hours_end?: string | null
          operating_hours_start?: string | null
          postal_code?: string | null
          region?: string | null
          sort_order?: number
          supplier_id?: string
          updated_at?: string
          updated_by?: string
          what3words?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "supplier_addresses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "supplier_addresses_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "supplier_addresses_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      suppliers: {
        Row: {
          category: string | null
          company_id: string
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          created_at: string
          created_by: string
          deleted_at: string | null
          id: string
          is_in_library: boolean
          library_source_id: string | null
          name: string
          notes: string | null
          project_id: string
          status: string
          updated_at: string
          updated_by: string
          website: string | null
        }
        Insert: {
          category?: string | null
          company_id: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by: string
          deleted_at?: string | null
          id?: string
          is_in_library?: boolean
          library_source_id?: string | null
          name: string
          notes?: string | null
          project_id: string
          status?: string
          updated_at?: string
          updated_by: string
          website?: string | null
        }
        Update: {
          category?: string | null
          company_id?: string
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          id?: string
          is_in_library?: boolean
          library_source_id?: string | null
          name?: string
          notes?: string | null
          project_id?: string
          status?: string
          updated_at?: string
          updated_by?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "suppliers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "suppliers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "suppliers_library_source_id_fkey"
            columns: ["library_source_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "suppliers_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "suppliers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      suppressed_emails: {
        Row: {
          created_at: string
          email: string
          id: string
          metadata: Json | null
          reason: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          metadata?: Json | null
          reason: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          metadata?: Json | null
          reason?: string
        }
        Relationships: []
      }
      technical_company_detail_layer_config: {
        Row: {
          company_id: string
          created_at: string
          id: string
          is_active: boolean
          is_internal: boolean
          is_system_default: boolean
          layer_key: string
          layer_label: string
          sort_order: number
          updated_at: string
          visible_in_full_view: boolean
          visible_in_standard_view: boolean
          visible_in_summary_view: boolean
          visible_in_supplier_export: boolean
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          is_active?: boolean
          is_internal?: boolean
          is_system_default?: boolean
          layer_key: string
          layer_label: string
          sort_order?: number
          updated_at?: string
          visible_in_full_view?: boolean
          visible_in_standard_view?: boolean
          visible_in_summary_view?: boolean
          visible_in_supplier_export?: boolean
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          is_active?: boolean
          is_internal?: boolean
          is_system_default?: boolean
          layer_key?: string
          layer_label?: string
          sort_order?: number
          updated_at?: string
          visible_in_full_view?: boolean
          visible_in_standard_view?: boolean
          visible_in_summary_view?: boolean
          visible_in_supplier_export?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "technical_company_detail_layer_config_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_groups: {
        Row: {
          category: string | null
          company_id: string
          created_at: string
          created_by: string | null
          created_by_ai_run_id: string | null
          created_by_kind: string
          created_by_user_id: string | null
          deleted_at: string | null
          description: string | null
          icon_key: string | null
          id: string
          is_in_library: boolean
          last_ai_action: string | null
          last_modified_by_ai_at: string | null
          last_modified_by_ai_run_id: string | null
          last_modified_by_kind: string
          last_modified_by_user_id: string | null
          legacy_item_type: string | null
          library_source_id: string | null
          name: string
          parent_group_id: string | null
          parent_id: string
          project_id: string
          sort_order: number
          tier_level: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          category?: string | null
          company_id: string
          created_at?: string
          created_by?: string | null
          created_by_ai_run_id?: string | null
          created_by_kind?: string
          created_by_user_id?: string | null
          deleted_at?: string | null
          description?: string | null
          icon_key?: string | null
          id?: string
          is_in_library?: boolean
          last_ai_action?: string | null
          last_modified_by_ai_at?: string | null
          last_modified_by_ai_run_id?: string | null
          last_modified_by_kind?: string
          last_modified_by_user_id?: string | null
          legacy_item_type?: string | null
          library_source_id?: string | null
          name: string
          parent_group_id?: string | null
          parent_id: string
          project_id: string
          sort_order?: number
          tier_level?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          category?: string | null
          company_id?: string
          created_at?: string
          created_by?: string | null
          created_by_ai_run_id?: string | null
          created_by_kind?: string
          created_by_user_id?: string | null
          deleted_at?: string | null
          description?: string | null
          icon_key?: string | null
          id?: string
          is_in_library?: boolean
          last_ai_action?: string | null
          last_modified_by_ai_at?: string | null
          last_modified_by_ai_run_id?: string | null
          last_modified_by_kind?: string
          last_modified_by_user_id?: string | null
          legacy_item_type?: string | null
          library_source_id?: string | null
          name?: string
          parent_group_id?: string | null
          parent_id?: string
          project_id?: string
          sort_order?: number
          tier_level?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "technical_groups_created_by_ai_run_id_fkey"
            columns: ["created_by_ai_run_id"]
            isOneToOne: false
            referencedRelation: "ai_action_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_groups_created_by_user_id_fkey"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_groups_last_modified_by_ai_run_id_fkey"
            columns: ["last_modified_by_ai_run_id"]
            isOneToOne: false
            referencedRelation: "ai_action_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_groups_last_modified_by_user_id_fkey"
            columns: ["last_modified_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_groups_parent_group_id_fkey"
            columns: ["parent_group_id"]
            isOneToOne: false
            referencedRelation: "technical_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_groups_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "technical_tables"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_item_attachments: {
        Row: {
          company_id: string
          created_at: string
          deleted_at: string | null
          description: string | null
          equipment_item_id: string
          file_name: string
          file_size_bytes: number | null
          file_type: string | null
          file_url: string
          id: string
          project_id: string
          uploaded_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          equipment_item_id: string
          file_name: string
          file_size_bytes?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          project_id: string
          uploaded_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          equipment_item_id?: string
          file_name?: string
          file_size_bytes?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          project_id?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "technical_item_attachments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_item_attachments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_item_attachments_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_items: {
        Row: {
          company_id: string
          content: string | null
          content_format: string
          created_at: string
          created_by: string | null
          created_by_ai_run_id: string | null
          created_by_kind: string
          created_by_user_id: string | null
          current_revision_id: string | null
          deleted_at: string | null
          id: string
          is_internal: boolean
          last_ai_action: string | null
          last_modified_by_ai_at: string | null
          last_modified_by_ai_run_id: string | null
          last_modified_by_kind: string
          last_modified_by_user_id: string | null
          layer_key: string
          layer_label: string
          legacy_detail_layer_id: string | null
          parent_id: string
          project_id: string
          tier_level: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          company_id: string
          content?: string | null
          content_format?: string
          created_at?: string
          created_by?: string | null
          created_by_ai_run_id?: string | null
          created_by_kind?: string
          created_by_user_id?: string | null
          current_revision_id?: string | null
          deleted_at?: string | null
          id?: string
          is_internal?: boolean
          last_ai_action?: string | null
          last_modified_by_ai_at?: string | null
          last_modified_by_ai_run_id?: string | null
          last_modified_by_kind?: string
          last_modified_by_user_id?: string | null
          layer_key: string
          layer_label: string
          legacy_detail_layer_id?: string | null
          parent_id: string
          project_id: string
          tier_level?: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          company_id?: string
          content?: string | null
          content_format?: string
          created_at?: string
          created_by?: string | null
          created_by_ai_run_id?: string | null
          created_by_kind?: string
          created_by_user_id?: string | null
          current_revision_id?: string | null
          deleted_at?: string | null
          id?: string
          is_internal?: boolean
          last_ai_action?: string | null
          last_modified_by_ai_at?: string | null
          last_modified_by_ai_run_id?: string | null
          last_modified_by_kind?: string
          last_modified_by_user_id?: string | null
          layer_key?: string
          layer_label?: string
          legacy_detail_layer_id?: string | null
          parent_id?: string
          project_id?: string
          tier_level?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "technical_items_created_by_ai_run_id_fkey"
            columns: ["created_by_ai_run_id"]
            isOneToOne: false
            referencedRelation: "ai_action_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_items_created_by_user_id_fkey"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_items_last_modified_by_ai_run_id_fkey"
            columns: ["last_modified_by_ai_run_id"]
            isOneToOne: false
            referencedRelation: "ai_action_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_items_last_modified_by_user_id_fkey"
            columns: ["last_modified_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_items_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "technical_rows"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_plan_annotations: {
        Row: {
          annotation_type: string
          author_id: string
          company_id: string | null
          content: string | null
          created_at: string
          deleted_at: string | null
          id: string
          plan_id: string
          position_data: Json
          project_id: string | null
          resolved: boolean
          resolved_by: string | null
          updated_at: string
        }
        Insert: {
          annotation_type: string
          author_id: string
          company_id?: string | null
          content?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          plan_id: string
          position_data: Json
          project_id?: string | null
          resolved?: boolean
          resolved_by?: string | null
          updated_at?: string
        }
        Update: {
          annotation_type?: string
          author_id?: string
          company_id?: string | null
          content?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          plan_id?: string
          position_data?: Json
          project_id?: string | null
          resolved?: boolean
          resolved_by?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "technical_plan_annotations_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_plan_annotations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_plan_annotations_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "technical_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_plan_annotations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_plan_annotations_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_plans: {
        Row: {
          company_id: string
          created_at: string
          deleted_at: string | null
          description: string | null
          file_name: string
          file_size_bytes: number | null
          file_type: string | null
          file_url: string
          id: string
          plan_type: string | null
          project_id: string
          section_id: string
          sort_order: number
          status: string
          title: string
          updated_at: string
          uploaded_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          file_name: string
          file_size_bytes?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          plan_type?: string | null
          project_id: string
          section_id: string
          sort_order?: number
          status?: string
          title: string
          updated_at?: string
          uploaded_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          file_name?: string
          file_size_bytes?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          plan_type?: string | null
          project_id?: string
          section_id?: string
          sort_order?: number
          status?: string
          title?: string
          updated_at?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "technical_plans_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_plans_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_plans_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_power_distributions: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          description: string | null
          file_name: string | null
          file_type: string | null
          file_url: string | null
          id: string
          project_id: string
          section_id: string
          sort_order: number
          status: string
          supply_capacity_kw: number | null
          supply_type: string | null
          title: string
          total_load_kw: number | null
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          description?: string | null
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          project_id: string
          section_id: string
          sort_order?: number
          status?: string
          supply_capacity_kw?: number | null
          supply_type?: string | null
          title: string
          total_load_kw?: number | null
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          description?: string | null
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          project_id?: string
          section_id?: string
          sort_order?: number
          status?: string
          supply_capacity_kw?: number | null
          supply_type?: string | null
          title?: string
          total_load_kw?: number | null
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "technical_power_distributions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_power_distributions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_power_distributions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_power_distributions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_rigging_points: {
        Row: {
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          description: string | null
          file_name: string | null
          file_url: string | null
          id: string
          max_load_kg: number | null
          planned_load_kg: number | null
          position_reference: string | null
          project_id: string
          rigging_type: string | null
          safety_factor: number | null
          section_id: string
          sort_order: number
          status: string
          title: string
          updated_at: string
          updated_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          description?: string | null
          file_name?: string | null
          file_url?: string | null
          id?: string
          max_load_kg?: number | null
          planned_load_kg?: number | null
          position_reference?: string | null
          project_id: string
          rigging_type?: string | null
          safety_factor?: number | null
          section_id: string
          sort_order?: number
          status?: string
          title: string
          updated_at?: string
          updated_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          description?: string | null
          file_name?: string | null
          file_url?: string | null
          id?: string
          max_load_kg?: number | null
          planned_load_kg?: number | null
          position_reference?: string | null
          project_id?: string
          rigging_type?: string | null
          safety_factor?: number | null
          section_id?: string
          sort_order?: number
          status?: string
          title?: string
          updated_at?: string
          updated_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "technical_rigging_points_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_rigging_points_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_rigging_points_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_rigging_points_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_root: {
        Row: {
          company_id: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          description: string | null
          end_date: string | null
          icon_key: string | null
          id: string
          is_in_library: boolean
          library_source_id: string | null
          project_id: string
          sort_order: number
          start_date: string | null
          status: string
          tier_level: number
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          end_date?: string | null
          icon_key?: string | null
          id?: string
          is_in_library?: boolean
          library_source_id?: string | null
          project_id: string
          sort_order?: number
          start_date?: string | null
          status?: string
          tier_level?: number
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          end_date?: string | null
          icon_key?: string | null
          id?: string
          is_in_library?: boolean
          library_source_id?: string | null
          project_id?: string
          sort_order?: number
          start_date?: string | null
          status?: string
          tier_level?: number
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      technical_row_detail_history: {
        Row: {
          change_action: string
          change_reason: string | null
          changed_at: string
          changed_by: string
          company_id: string
          id: string
          layer_id: string
          layer_key: string
          new_content: string | null
          occurred_after_approval: boolean
          previous_content: string | null
          project_id: string
          row_id: string
        }
        Insert: {
          change_action: string
          change_reason?: string | null
          changed_at?: string
          changed_by: string
          company_id: string
          id?: string
          layer_id: string
          layer_key: string
          new_content?: string | null
          occurred_after_approval?: boolean
          previous_content?: string | null
          project_id: string
          row_id: string
        }
        Update: {
          change_action?: string
          change_reason?: string | null
          changed_at?: string
          changed_by?: string
          company_id?: string
          id?: string
          layer_id?: string
          layer_key?: string
          new_content?: string | null
          occurred_after_approval?: boolean
          previous_content?: string | null
          project_id?: string
          row_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "technical_row_detail_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_row_detail_history_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_row_detail_history_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_rows: {
        Row: {
          category: string | null
          company_id: string
          created_at: string
          created_by: string | null
          created_by_ai_run_id: string | null
          created_by_kind: string
          created_by_user_id: string | null
          deleted_at: string | null
          description: string | null
          dimensions: string | null
          example_product_text: string | null
          example_product_url: string | null
          icon_key: string | null
          id: string
          is_in_library: boolean
          last_ai_action: string | null
          last_modified_by_ai_at: string | null
          last_modified_by_ai_run_id: string | null
          last_modified_by_kind: string
          last_modified_by_user_id: string | null
          legacy_item_type: string | null
          library_source_id: string | null
          modified_after_approval: boolean
          name: string
          not_acceptable_text: string | null
          not_acceptable_url: string | null
          notes: string | null
          parent_id: string | null
          parent_table_id: string | null
          project_id: string
          quantity: number
          removed_at: string | null
          removed_by: string | null
          removed_reason: string | null
          sort_order: number
          status: string
          supplier_id: string | null
          tier_level: number
          updated_at: string
          updated_by: string | null
          weight_kg: number | null
        }
        Insert: {
          category?: string | null
          company_id: string
          created_at?: string
          created_by?: string | null
          created_by_ai_run_id?: string | null
          created_by_kind?: string
          created_by_user_id?: string | null
          deleted_at?: string | null
          description?: string | null
          dimensions?: string | null
          example_product_text?: string | null
          example_product_url?: string | null
          icon_key?: string | null
          id?: string
          is_in_library?: boolean
          last_ai_action?: string | null
          last_modified_by_ai_at?: string | null
          last_modified_by_ai_run_id?: string | null
          last_modified_by_kind?: string
          last_modified_by_user_id?: string | null
          legacy_item_type?: string | null
          library_source_id?: string | null
          modified_after_approval?: boolean
          name: string
          not_acceptable_text?: string | null
          not_acceptable_url?: string | null
          notes?: string | null
          parent_id?: string | null
          parent_table_id?: string | null
          project_id: string
          quantity?: number
          removed_at?: string | null
          removed_by?: string | null
          removed_reason?: string | null
          sort_order?: number
          status?: string
          supplier_id?: string | null
          tier_level?: number
          updated_at?: string
          updated_by?: string | null
          weight_kg?: number | null
        }
        Update: {
          category?: string | null
          company_id?: string
          created_at?: string
          created_by?: string | null
          created_by_ai_run_id?: string | null
          created_by_kind?: string
          created_by_user_id?: string | null
          deleted_at?: string | null
          description?: string | null
          dimensions?: string | null
          example_product_text?: string | null
          example_product_url?: string | null
          icon_key?: string | null
          id?: string
          is_in_library?: boolean
          last_ai_action?: string | null
          last_modified_by_ai_at?: string | null
          last_modified_by_ai_run_id?: string | null
          last_modified_by_kind?: string
          last_modified_by_user_id?: string | null
          legacy_item_type?: string | null
          library_source_id?: string | null
          modified_after_approval?: boolean
          name?: string
          not_acceptable_text?: string | null
          not_acceptable_url?: string | null
          notes?: string | null
          parent_id?: string | null
          parent_table_id?: string | null
          project_id?: string
          quantity?: number
          removed_at?: string | null
          removed_by?: string | null
          removed_reason?: string | null
          sort_order?: number
          status?: string
          supplier_id?: string | null
          tier_level?: number
          updated_at?: string
          updated_by?: string | null
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "technical_rows_created_by_ai_run_id_fkey"
            columns: ["created_by_ai_run_id"]
            isOneToOne: false
            referencedRelation: "ai_action_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_rows_created_by_user_id_fkey"
            columns: ["created_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_rows_last_modified_by_ai_run_id_fkey"
            columns: ["last_modified_by_ai_run_id"]
            isOneToOne: false
            referencedRelation: "ai_action_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_rows_last_modified_by_user_id_fkey"
            columns: ["last_modified_by_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_rows_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "technical_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_rows_parent_table_id_fkey"
            columns: ["parent_table_id"]
            isOneToOne: false
            referencedRelation: "technical_tables"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_schematics: {
        Row: {
          company_id: string
          created_at: string
          deleted_at: string | null
          description: string | null
          file_name: string
          file_size_bytes: number | null
          file_type: string | null
          file_url: string
          id: string
          project_id: string
          schematic_type: string | null
          section_id: string
          sort_order: number
          status: string
          title: string
          updated_at: string
          uploaded_by: string
        }
        Insert: {
          company_id: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          file_name: string
          file_size_bytes?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          project_id: string
          schematic_type?: string | null
          section_id: string
          sort_order?: number
          status?: string
          title: string
          updated_at?: string
          uploaded_by: string
        }
        Update: {
          company_id?: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          file_name?: string
          file_size_bytes?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          project_id?: string
          schematic_type?: string | null
          section_id?: string
          sort_order?: number
          status?: string
          title?: string
          updated_at?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "technical_schematics_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_schematics_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_schematics_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_tables: {
        Row: {
          company_id: string
          created_at: string
          created_by: string | null
          deleted_at: string | null
          department: string | null
          description: string | null
          id: string
          is_in_library: boolean
          library_source_id: string | null
          parent_id: string
          project_id: string
          sort_order: number
          spec_owner_approved_at: string | null
          spec_owner_approved_by: string | null
          status: string
          supplier_approved_at: string | null
          supplier_approved_by: string | null
          tier_level: number
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          department?: string | null
          description?: string | null
          id?: string
          is_in_library?: boolean
          library_source_id?: string | null
          parent_id: string
          project_id: string
          sort_order?: number
          spec_owner_approved_at?: string | null
          spec_owner_approved_by?: string | null
          status?: string
          supplier_approved_at?: string | null
          supplier_approved_by?: string | null
          tier_level?: number
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          department?: string | null
          description?: string | null
          id?: string
          is_in_library?: boolean
          library_source_id?: string | null
          parent_id?: string
          project_id?: string
          sort_order?: number
          spec_owner_approved_at?: string | null
          spec_owner_approved_by?: string | null
          status?: string
          supplier_approved_at?: string | null
          supplier_approved_by?: string | null
          tier_level?: number
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "technical_tables_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "technical_root"
            referencedColumns: ["id"]
          },
        ]
      }
      technical_user_view_preferences: {
        Row: {
          created_at: string
          id: string
          project_id: string
          reader_view: string
          root_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          project_id: string
          reader_view: string
          root_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          project_id?: string
          reader_view?: string
          root_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "technical_user_view_preferences_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technical_user_view_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tester_requests: {
        Row: {
          created_at: string
          display_name: string | null
          email: string
          id: string
          note: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          email: string
          id?: string
          note?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          note?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      ui_element_descriptions: {
        Row: {
          created_at: string
          element_key: string
          element_type: string
          id: string
          long_description: string
          module_key: string | null
          short_description: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          element_key: string
          element_type?: string
          id?: string
          long_description?: string
          module_key?: string | null
          short_description?: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          element_key?: string
          element_type?: string
          id?: string
          long_description?: string
          module_key?: string | null
          short_description?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      user_permission_overrides: {
        Row: {
          access: string
          company_id: string | null
          created_at: string
          granted_at: string
          granted_by: string | null
          id: string
          note: string | null
          permission_id: string
          project_id: string
          revoked_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access: string
          company_id?: string | null
          created_at?: string
          granted_at?: string
          granted_by?: string | null
          id?: string
          note?: string | null
          permission_id: string
          project_id: string
          revoked_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access?: string
          company_id?: string | null
          created_at?: string
          granted_at?: string
          granted_by?: string | null
          id?: string
          note?: string | null
          permission_id?: string
          project_id?: string
          revoked_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_permission_overrides_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          company_id: string | null
          created_at: string | null
          granted_at: string
          granted_by: string | null
          id: string
          project_id: string | null
          revoked_at: string | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          granted_at?: string
          granted_by?: string | null
          id?: string
          project_id?: string | null
          revoked_at?: string | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          granted_at?: string
          granted_by?: string | null
          id?: string
          project_id?: string | null
          revoked_at?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_roles_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_roles_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_types: {
        Row: {
          co2_emission_gkm: number | null
          company_id: string
          created_at: string
          created_by: string
          deleted_at: string | null
          emissions_standard: string | null
          fuel_consumption_mpg: number | null
          fuel_type: string | null
          height_m: number | null
          id: string
          is_from_library: boolean
          length_m: number | null
          library_source_id: string | null
          model: string | null
          name: string
          payload_kg: number | null
          project_id: string | null
          sort_order: number
          supplier_id: string | null
          updated_at: string
          updated_by: string
          width_m: number | null
        }
        Insert: {
          co2_emission_gkm?: number | null
          company_id: string
          created_at?: string
          created_by: string
          deleted_at?: string | null
          emissions_standard?: string | null
          fuel_consumption_mpg?: number | null
          fuel_type?: string | null
          height_m?: number | null
          id?: string
          is_from_library?: boolean
          length_m?: number | null
          library_source_id?: string | null
          model?: string | null
          name: string
          payload_kg?: number | null
          project_id?: string | null
          sort_order?: number
          supplier_id?: string | null
          updated_at?: string
          updated_by: string
          width_m?: number | null
        }
        Update: {
          co2_emission_gkm?: number | null
          company_id?: string
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          emissions_standard?: string | null
          fuel_consumption_mpg?: number | null
          fuel_type?: string | null
          height_m?: number | null
          id?: string
          is_from_library?: boolean
          length_m?: number | null
          library_source_id?: string | null
          model?: string | null
          name?: string
          payload_kg?: number | null
          project_id?: string | null
          sort_order?: number
          supplier_id?: string | null
          updated_at?: string
          updated_by?: string
          width_m?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicle_types_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_types_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_types_library_source_id_fkey"
            columns: ["library_source_id"]
            isOneToOne: false
            referencedRelation: "vehicle_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_types_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_types_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicle_types_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      venue_loading_bay_documents: {
        Row: {
          deleted_at: string | null
          description: string | null
          file_name: string
          file_size_bytes: number | null
          file_type: string | null
          file_url: string
          id: string
          loading_bay_id: string
          uploaded_at: string
          uploaded_by: string
        }
        Insert: {
          deleted_at?: string | null
          description?: string | null
          file_name: string
          file_size_bytes?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          loading_bay_id: string
          uploaded_at?: string
          uploaded_by: string
        }
        Update: {
          deleted_at?: string | null
          description?: string | null
          file_name?: string
          file_size_bytes?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          loading_bay_id?: string
          uploaded_at?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "venue_loading_bay_documents_loading_bay_id_fkey"
            columns: ["loading_bay_id"]
            isOneToOne: false
            referencedRelation: "venue_loading_bays"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venue_loading_bay_documents_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      venue_loading_bays: {
        Row: {
          access_restrictions: string | null
          created_at: string
          created_by: string
          deleted_at: string | null
          delivery_instructions: string | null
          description: string | null
          id: string
          is_active: boolean
          max_vehicle_height_m: number | null
          max_vehicle_length_m: number | null
          max_vehicle_weight_t: number | null
          name: string
          operating_hours_end: string | null
          operating_hours_start: string | null
          sort_order: number
          updated_at: string
          updated_by: string
          venue_id: string
          what3words: string | null
        }
        Insert: {
          access_restrictions?: string | null
          created_at?: string
          created_by: string
          deleted_at?: string | null
          delivery_instructions?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          max_vehicle_height_m?: number | null
          max_vehicle_length_m?: number | null
          max_vehicle_weight_t?: number | null
          name: string
          operating_hours_end?: string | null
          operating_hours_start?: string | null
          sort_order?: number
          updated_at?: string
          updated_by: string
          venue_id: string
          what3words?: string | null
        }
        Update: {
          access_restrictions?: string | null
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          delivery_instructions?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          max_vehicle_height_m?: number | null
          max_vehicle_length_m?: number | null
          max_vehicle_weight_t?: number | null
          name?: string
          operating_hours_end?: string | null
          operating_hours_start?: string | null
          sort_order?: number
          updated_at?: string
          updated_by?: string
          venue_id?: string
          what3words?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "venue_loading_bays_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venue_loading_bays_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venue_loading_bays_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      venues: {
        Row: {
          address_line_1: string | null
          address_line_2: string | null
          city: string | null
          company_id: string
          country: string | null
          created_at: string
          created_by: string
          deleted_at: string | null
          general_notes: string | null
          id: string
          is_in_library: boolean
          library_source_id: string | null
          name: string
          postal_code: string | null
          project_id: string
          region: string | null
          settings: Json | null
          site_contact_email: string | null
          site_contact_name: string | null
          site_contact_phone: string | null
          updated_at: string
          updated_by: string
          what3words: string | null
        }
        Insert: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          company_id: string
          country?: string | null
          created_at?: string
          created_by: string
          deleted_at?: string | null
          general_notes?: string | null
          id?: string
          is_in_library?: boolean
          library_source_id?: string | null
          name: string
          postal_code?: string | null
          project_id: string
          region?: string | null
          settings?: Json | null
          site_contact_email?: string | null
          site_contact_name?: string | null
          site_contact_phone?: string | null
          updated_at?: string
          updated_by: string
          what3words?: string | null
        }
        Update: {
          address_line_1?: string | null
          address_line_2?: string | null
          city?: string | null
          company_id?: string
          country?: string | null
          created_at?: string
          created_by?: string
          deleted_at?: string | null
          general_notes?: string | null
          id?: string
          is_in_library?: boolean
          library_source_id?: string | null
          name?: string
          postal_code?: string | null
          project_id?: string
          region?: string | null
          settings?: Json | null
          site_contact_email?: string | null
          site_contact_name?: string | null
          site_contact_phone?: string | null
          updated_at?: string
          updated_by?: string
          what3words?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "venues_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venues_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venues_library_source_id_fkey"
            columns: ["library_source_id"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venues_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venues_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      workspace_modules: {
        Row: {
          created_at: string
          id: string
          is_enabled: boolean
          module_key: string
          settings: Json | null
          sort_order: number
          updated_at: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_enabled?: boolean
          module_key: string
          settings?: Json | null
          sort_order?: number
          updated_at?: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_enabled?: boolean
          module_key?: string
          settings?: Json | null
          sort_order?: number
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workspace_modules_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          created_at: string
          id: string
          project_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          project_id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          project_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "workspaces_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      project_client_viewers_safe: {
        Row: {
          added_by: string | null
          company_id: string | null
          created_at: string | null
          display_name: string | null
          id: string | null
          project_id: string | null
          revoked_at: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          added_by?: string | null
          company_id?: string | null
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          project_id?: string | null
          revoked_at?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          added_by?: string | null
          company_id?: string | null
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          project_id?: string | null
          revoked_at?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_client_viewers_added_by_fkey"
            columns: ["added_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_client_viewers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_client_viewers_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_client_viewers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      v_hierarchy_tables: {
        Row: {
          module_key: string | null
          physical_table_name: string | null
          tier_level: string | null
          tier_level_num: number | null
        }
        Relationships: []
      }
      v_schedule_root_id_backfill_check: {
        Row: {
          items_total: number | null
          items_with_root: number | null
          rows_total: number | null
          rows_with_root: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      accept_link_invite_in_app: {
        Args: { _crew_profile_id: string; _link_id: string }
        Returns: undefined
      }
      accept_link_request: { Args: { _link_id: string }; Returns: undefined }
      accept_offer: {
        Args: { _shift_id: string }
        Returns: {
          reason: string
          shift_id: string
          success: boolean
        }[]
      }
      acknowledge_crew_profile_visibility: {
        Args: {
          _ack_text: string
          _crew_profile_id: string
          _ip?: string
          _mode: Database["public"]["Enums"]["profile_visibility_mode"]
          _opt_out: boolean
          _user_agent?: string
        }
        Returns: {
          about_me: string | null
          accessibility_needs: string | null
          address_line1: string | null
          address_line2: string | null
          address_postcode: string | null
          address_region: string | null
          ai_avatar_generated_at: string | null
          ai_avatar_path: string | null
          ai_avatar_style: string | null
          ai_avatar_url: string | null
          allergies: string | null
          availability_notes: string | null
          availability_status: Database["public"]["Enums"]["crew_availability"]
          avatar_url: string | null
          bio: string | null
          company_number: string | null
          created_at: string
          date_of_birth: string | null
          default_avatar_source: string
          deleted_at: string | null
          dietary_requirements: string | null
          discoverable_opt_out: boolean
          display_name: string
          display_name_is_custom: boolean
          driving_licence_categories: string[] | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          engagement_types: string[] | null
          first_name: string | null
          fun_fav_job: string | null
          fun_industry_story: string | null
          fun_proudest_role: string | null
          headline: string | null
          id: string
          inbound_email_on_approved: boolean
          inbound_email_on_invited: boolean
          inbound_email_on_reminder: boolean
          instagram_handle: string | null
          is_public: boolean
          languages: string[] | null
          last_dashboard_seen_at: string | null
          last_name: string | null
          linkedin_handle: string | null
          location_city: string | null
          location_country: string | null
          name_migration_required: boolean
          nationality: string | null
          nickname: string | null
          notice_period_days: number | null
          onboarding_step: Database["public"]["Enums"]["crew_onboarding_step"]
          outbound_email_on_accepted: boolean
          outbound_email_on_declined: boolean
          passport_held: boolean | null
          payment_method:
            | Database["public"]["Enums"]["crew_payment_method"]
            | null
          phone: string | null
          photo_url: string | null
          ppe_size: Database["public"]["Enums"]["apparel_size"] | null
          preferred_day_rate_currency: string | null
          preferred_day_rate_max: number | null
          preferred_day_rate_min: number | null
          profile_visibility_mode: Database["public"]["Enums"]["profile_visibility_mode"]
          pronouns: string | null
          showreel_url: string | null
          skills: string[] | null
          tax_residency_country: string | null
          tax_status: Database["public"]["Enums"]["crew_tax_status"] | null
          technical_skills_summary: string | null
          trading_name: string | null
          travel_willingness:
            | Database["public"]["Enums"]["crew_travel_willingness"]
            | null
          tshirt_size: Database["public"]["Enums"]["apparel_size"] | null
          updated_at: string
          user_id: string
          username: string | null
          utr_number: string | null
          vat_number: string | null
          vat_registered: boolean | null
          vehicle_owned: string | null
          visa_notes: string | null
          website_url: string | null
          willing_to_travel_internationally: boolean | null
          years_experience: number | null
        }
        SetofOptions: {
          from: "*"
          to: "crew_profiles"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      add_availability_request_recipients: {
        Args: { _recipients: Json; _request_id: string }
        Returns: {
          added: boolean
          input_index: number
          reason: string
          recipient_id: string
        }[]
      }
      add_availability_request_shifts: {
        Args: { _request_id: string; _shift_ids: string[] }
        Returns: {
          added: boolean
          reason: string
          shift_id: string
        }[]
      }
      admin_bypass_outbound_cooldown: {
        Args: {
          _company_id: string
          _crew_profile_id: string
          _message?: string
        }
        Returns: string
      }
      admin_list_recent_cooldown_bypasses: {
        Args: { _limit?: number }
        Returns: {
          actor_id: string
          actor_name: string
          audit_id: string
          company_id: string
          company_name: string
          crew_display_name: string
          crew_profile_id: string
          link_id: string
          link_status: Database["public"]["Enums"]["crew_link_status"]
          performed_at: string
        }[]
      }
      admin_search_companies: {
        Args: { _limit?: number; _q: string }
        Returns: {
          company_id: string
          lead_domain: string
          name: string
        }[]
      }
      admin_search_crew_profiles: {
        Args: { _limit?: number; _q: string }
        Returns: {
          crew_profile_id: string
          display_name: string
          email: string
          username: string
        }[]
      }
      approve_link_request: { Args: { _link_id: string }; Returns: undefined }
      block_company: {
        Args: {
          _company_id: string
          _crew_profile_id: string
          _reason?: string
        }
        Returns: undefined
      }
      can_manager_verify_crew_docs: {
        Args: { _crew_profile_id: string; _user_id: string }
        Returns: boolean
      }
      can_user_manage_crew_requirements_for_company: {
        Args: { _company_id: string; _user_id: string }
        Returns: boolean
      }
      can_user_verify_crew_docs_for_profile: {
        Args: { _crew_profile_id: string; _user_id: string }
        Returns: boolean
      }
      can_user_verify_crew_for_company: {
        Args: { _company_id: string; _user_id: string }
        Returns: boolean
      }
      can_user_write_crew_pool_for_company: {
        Args: { _company_id: string; _user_id: string }
        Returns: boolean
      }
      check_and_fill_availability_request: {
        Args: { _request_id: string }
        Returns: string
      }
      close_availability_request: {
        Args: { _request_id: string }
        Returns: undefined
      }
      confirm_placeholder_link: {
        Args: { _crew_profile_id: string; _placeholder_id: string }
        Returns: {
          crew_member_id: string
          reason: string
          shifts_repointed: number
          success: boolean
        }[]
      }
      consume_availability_token: {
        Args: {
          _ip_hash?: string
          _response: Database["public"]["Enums"]["availability_response_state"]
          _response_note?: string
          _selected_shifts?: string[]
          _token: string
          _user_agent?: string
        }
        Returns: {
          reason: string
          recipient_id: string
          request_id: string
          response_state: Database["public"]["Enums"]["availability_response_state"]
          success: boolean
        }[]
      }
      consume_placeholder_invite_token: {
        Args: { _crew_profile_id: string; _token: string; _user_id: string }
        Returns: {
          company_id: string
          placeholder_id: string
          project_id: string
          reason: string
          success: boolean
          suggestion_id: string
        }[]
      }
      create_availability_request_draft: {
        Args: {
          _copy_paste_format?: Database["public"]["Enums"]["availability_request_format"]
          _crew_call_id: string
          _delivery_mode: Database["public"]["Enums"]["availability_request_delivery_mode"]
          _expires_at?: string
          _job_status: Database["public"]["Enums"]["availability_request_job_status"]
          _message?: string
          _project_id: string
          _recipient_filter?: Json
          _request_type: Database["public"]["Enums"]["availability_request_type"]
          _title: string
        }
        Returns: string
      }
      crew_book_manager_digest_enabled: {
        Args: { _company_id: string }
        Returns: boolean
      }
      crew_book_outbound_cooldown_days: {
        Args: { _company_id: string }
        Returns: number
      }
      crew_book_show_decline_reason_to_crew: {
        Args: { _company_id: string }
        Returns: boolean
      }
      crew_location_suggestions: {
        Args: {
          _company_id: string
          _kind: string
          _limit?: number
          _query?: string
        }
        Returns: {
          usage_count: number
          value: string
        }[]
      }
      current_crew_profile_id: { Args: never; Returns: string }
      decline_link_invite_in_app: {
        Args: { _crew_profile_id: string; _link_id: string; _reason?: string }
        Returns: undefined
      }
      decline_link_request: {
        Args: { _link_id: string; _reason?: string }
        Returns: undefined
      }
      decline_offer: {
        Args: { _reason?: string; _shift_id: string }
        Returns: {
          reason: string
          shift_id: string
          success: boolean
        }[]
      }
      delete_availability_request: {
        Args: { _request_id: string }
        Returns: undefined
      }
      delete_email: {
        Args: { message_id: number; queue_name: string }
        Returns: boolean
      }
      dismiss_suggested_crew_book_grant: {
        Args: { _company_id: string; _user_id: string }
        Returns: undefined
      }
      duplicate_availability_request: {
        Args: { _request_id: string }
        Returns: string
      }
      enqueue_email: {
        Args: { payload: Json; queue_name: string }
        Returns: number
      }
      expire_availability_requests: {
        Args: never
        Returns: {
          request_id: string
        }[]
      }
      expire_outbound_link_requests: {
        Args: never
        Returns: {
          company_id: string
          company_name: string
          crew_profile_id: string
          crew_user_id: string
          email_on_expired: boolean
          freelancer_email: string
          freelancer_name: string
          link_id: string
        }[]
      }
      expire_stale_offers: {
        Args: never
        Returns: {
          expired_count: number
        }[]
      }
      generate_skill_suggestions_for_skill: {
        Args: {
          _skill_id: string
          _source?: Database["public"]["Enums"]["skill_suggestion_source"]
        }
        Returns: number
      }
      get_client_viewer_token: { Args: { _viewer_id: string }; Returns: string }
      get_inbound_link_notification_context: {
        Args: { _link_id: string }
        Returns: {
          communications_muted_at: string
          company_id: string
          company_name: string
          crew_profile_id: string
          freelancer_email: string
          freelancer_name: string
          inbound_email_on_approved: boolean
          inbound_email_on_invited: boolean
          inbound_email_on_reminder: boolean
          link_id: string
        }[]
      }
      get_invitation_token: {
        Args: { _invitation_id: string }
        Returns: string
      }
      get_my_availability_response_token: {
        Args: { _recipient_id: string }
        Returns: {
          expires_at: string
          token: string
        }[]
      }
      get_my_crew_company_link_token: {
        Args: { _link_id: string }
        Returns: string
      }
      get_my_crew_profile_sensitive: {
        Args: never
        Returns: {
          about_me: string | null
          accessibility_needs: string | null
          address_line1: string | null
          address_line2: string | null
          address_postcode: string | null
          address_region: string | null
          ai_avatar_generated_at: string | null
          ai_avatar_path: string | null
          ai_avatar_style: string | null
          ai_avatar_url: string | null
          allergies: string | null
          availability_notes: string | null
          availability_status: Database["public"]["Enums"]["crew_availability"]
          avatar_url: string | null
          bio: string | null
          company_number: string | null
          created_at: string
          date_of_birth: string | null
          default_avatar_source: string
          deleted_at: string | null
          dietary_requirements: string | null
          discoverable_opt_out: boolean
          display_name: string
          display_name_is_custom: boolean
          driving_licence_categories: string[] | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          engagement_types: string[] | null
          first_name: string | null
          fun_fav_job: string | null
          fun_industry_story: string | null
          fun_proudest_role: string | null
          headline: string | null
          id: string
          inbound_email_on_approved: boolean
          inbound_email_on_invited: boolean
          inbound_email_on_reminder: boolean
          instagram_handle: string | null
          is_public: boolean
          languages: string[] | null
          last_dashboard_seen_at: string | null
          last_name: string | null
          linkedin_handle: string | null
          location_city: string | null
          location_country: string | null
          name_migration_required: boolean
          nationality: string | null
          nickname: string | null
          notice_period_days: number | null
          onboarding_step: Database["public"]["Enums"]["crew_onboarding_step"]
          outbound_email_on_accepted: boolean
          outbound_email_on_declined: boolean
          passport_held: boolean | null
          payment_method:
            | Database["public"]["Enums"]["crew_payment_method"]
            | null
          phone: string | null
          photo_url: string | null
          ppe_size: Database["public"]["Enums"]["apparel_size"] | null
          preferred_day_rate_currency: string | null
          preferred_day_rate_max: number | null
          preferred_day_rate_min: number | null
          profile_visibility_mode: Database["public"]["Enums"]["profile_visibility_mode"]
          pronouns: string | null
          showreel_url: string | null
          skills: string[] | null
          tax_residency_country: string | null
          tax_status: Database["public"]["Enums"]["crew_tax_status"] | null
          technical_skills_summary: string | null
          trading_name: string | null
          travel_willingness:
            | Database["public"]["Enums"]["crew_travel_willingness"]
            | null
          tshirt_size: Database["public"]["Enums"]["apparel_size"] | null
          updated_at: string
          user_id: string
          username: string | null
          utr_number: string | null
          vat_number: string | null
          vat_registered: boolean | null
          vehicle_owned: string | null
          visa_notes: string | null
          website_url: string | null
          willing_to_travel_internationally: boolean | null
          years_experience: number | null
        }[]
        SetofOptions: {
          from: "*"
          to: "crew_profiles"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_open_availability_counts_for_crew_call: {
        Args: { _crew_call_id: string }
        Returns: {
          no_count: number
          pending_count: number
          shift_id: string
          yes_count: number
        }[]
      }
      get_outbound_link_notification_context: {
        Args: { _link_id: string }
        Returns: {
          company_id: string
          company_name: string
          crew_user_id: string
          decline_reason: string
          freelancer_email: string
          freelancer_name: string
          link_id: string
          pref_email_on_accepted: boolean
          pref_email_on_declined: boolean
          status: Database["public"]["Enums"]["crew_link_status"]
        }[]
      }
      has_crew_book_permission: {
        Args: {
          _company_id: string
          _permission_code: string
          _user_id: string
        }
        Returns: boolean
      }
      has_permission: {
        Args: {
          _company_id?: string
          _permission_code: string
          _project_id?: string
          _user_id: string
        }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      has_role_scoped: {
        Args: {
          _company_id?: string
          _project_id?: string
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_availability_request_filled: {
        Args: { _request_id: string }
        Returns: boolean
      }
      is_company_member: {
        Args: { _company_id: string; _user_id: string }
        Returns: boolean
      }
      is_crew_profile_linked_to_user_company: {
        Args: { _crew_profile_id: string; _user_id: string }
        Returns: boolean
      }
      list_availability_request_share_links: {
        Args: { _request_id: string }
        Returns: {
          consumed_at: string
          display_name: string
          email: string
          expires_at: string
          has_crew_book_account: boolean
          invalidated_at: string
          recipient_id: string
          recipient_kind: string
          response_state: string
          token: string
        }[]
      }
      list_company_crew_links: {
        Args: { _company_id: string }
        Returns: {
          accepted_at: string
          communications_muted_at: string
          created_at: string
          crew_profile_id: string
          declined_at: string
          display_name: string
          email: string
          ended_at: string
          initiated_by: Database["public"]["Enums"]["crew_link_initiator"]
          link_id: string
          request_message: string
          status: Database["public"]["Enums"]["crew_link_status"]
        }[]
      }
      list_crew_book_memberships: {
        Args: { _company_id: string }
        Returns: {
          display_name: string
          email: string
          granted_at: string
          granted_by: string
          id: string
          revoked_at: string
          role: Database["public"]["Enums"]["crew_book_role"]
          user_id: string
        }[]
      }
      list_my_company_links: {
        Args: { _crew_profile_id: string }
        Returns: {
          accepted_at: string
          communications_muted_at: string
          company_id: string
          company_name: string
          created_at: string
          declined_at: string
          ended_at: string
          initiated_by: Database["public"]["Enums"]["crew_link_initiator"]
          link_id: string
          request_message: string
          status: Database["public"]["Enums"]["crew_link_status"]
        }[]
      }
      list_my_outbound_link_requests: {
        Args: { _crew_profile_id: string }
        Returns: {
          accepted_at: string
          company_id: string
          company_name: string
          created_at: string
          decline_reason: string
          declined_at: string
          expired_at: string
          link_id: string
          request_message: string
          status: Database["public"]["Enums"]["crew_link_status"]
          withdrawn_at: string
          withdrawn_reason: string
        }[]
      }
      list_project_availability_requests: {
        Args: { _project_id: string }
        Returns: {
          created_at: string
          created_by: string
          created_by_display_name: string
          crew_call_id: string
          crew_call_title: string
          date_max: string
          date_min: string
          delivery_mode: Database["public"]["Enums"]["availability_request_delivery_mode"]
          expires_at: string
          job_status: Database["public"]["Enums"]["availability_request_job_status"]
          recipient_maybe: number
          recipient_no: number
          recipient_pending: number
          recipient_total: number
          recipient_yes: number
          request_id: string
          request_type: Database["public"]["Enums"]["availability_request_type"]
          shift_count: number
          state: Database["public"]["Enums"]["availability_request_state"]
          title: string
        }[]
      }
      list_suggested_crew_book_grants: {
        Args: { _company_id: string }
        Returns: {
          app_role: Database["public"]["Enums"]["app_role"]
          display_name: string
          email: string
          user_id: string
        }[]
      }
      move_to_dlq: {
        Args: {
          dlq_name: string
          message_id: number
          payload: Json
          source_queue: string
        }
        Returns: number
      }
      mute_company_communications: {
        Args: { _company_id: string; _crew_profile_id: string }
        Returns: undefined
      }
      my_availability_response_history: {
        Args: never
        Returns: {
          can_change: boolean
          closed_at: string
          company_id: string
          company_name: string
          crew_call_id: string
          expires_at: string
          job_status: Database["public"]["Enums"]["availability_request_job_status"]
          message: string
          project_id: string
          project_title: string
          recipient_id: string
          request_id: string
          request_state: Database["public"]["Enums"]["availability_request_state"]
          request_type: Database["public"]["Enums"]["availability_request_type"]
          responded_at: string
          response_note: string
          response_state: Database["public"]["Enums"]["availability_response_state"]
          title: string
          withdrawn_at: string
        }[]
      }
      my_confirmed_shifts: {
        Args: never
        Returns: {
          break_duration_minutes: number
          company_id: string
          company_name: string
          confirmation_responded_at: string
          crew_call_id: string
          crew_call_title: string
          department_name: string
          end_time: string
          free_text_role: string
          location_note: string
          project_id: string
          project_name: string
          role_name: string
          shift_date: string
          shift_id: string
          shift_notes: string
          start_time: string
        }[]
      }
      my_pending_availability_requests: {
        Args: never
        Returns: {
          company_id: string
          crew_call_id: string
          expires_at: string
          job_status: Database["public"]["Enums"]["availability_request_job_status"]
          message: string
          project_id: string
          recipient_id: string
          request_id: string
          request_type: Database["public"]["Enums"]["availability_request_type"]
          title: string
        }[]
      }
      my_pending_offers: {
        Args: never
        Returns: {
          company_id: string
          company_name: string
          confirmation_expires_at: string
          confirmation_sent_at: string
          crew_call_id: string
          crew_call_title: string
          end_time: string
          project_id: string
          project_name: string
          role_name: string
          shift_date: string
          shift_id: string
          shift_notes: string
          start_time: string
        }[]
      }
      next_avail_request_sort_key: {
        Args: { _crew_call_id: string }
        Returns: string
      }
      promote_skill_suggestion: {
        Args: {
          _admin_user_id?: string
          _aliases?: string[]
          _label: string
          _parent_id: string
          _slug: string
          _suggestion_id: string
        }
        Returns: string
      }
      read_email_batch: {
        Args: { batch_size: number; queue_name: string; vt: number }
        Returns: {
          message: Json
          msg_id: number
          read_ct: number
        }[]
      }
      record_custom_skill_suggestion: {
        Args: { _label: string; _user_id: string }
        Returns: string
      }
      reject_skill_suggestion: {
        Args: {
          _admin_user_id?: string
          _reason?: string
          _suggestion_id: string
        }
        Returns: undefined
      }
      reopen_my_availability_response: {
        Args: { _recipient_id: string }
        Returns: {
          token: string
        }[]
      }
      request_link_to_company:
        | {
            Args: {
              _company_id: string
              _crew_profile_id: string
              _message?: string
            }
            Returns: string
          }
        | {
            Args: {
              _company_id: string
              _crew_profile_id: string
              _message?: string
              _skip_cooldown?: boolean
            }
            Returns: string
          }
      request_link_to_freelancer: {
        Args: {
          _company_id: string
          _crew_profile_id: string
          _message?: string
          _redacted_id: string
        }
        Returns: string
      }
      rescan_custom_skill_matches: { Args: never; Returns: number }
      rescind_offer: {
        Args: { _shift_id: string }
        Returns: {
          reason: string
          shift_id: string
          success: boolean
        }[]
      }
      resolve_availability_request_recipient_cap: {
        Args: never
        Returns: number
      }
      resolve_offer_expiry_hours: {
        Args: { _crew_call_id: string }
        Returns: number
      }
      restore_suggested_crew_book_grants: {
        Args: { _company_id: string }
        Returns: number
      }
      revoke_link: {
        Args: { _link_id: string; _reason?: string }
        Returns: undefined
      }
      rpc_sort_key_health_scan_schedule: {
        Args: never
        Returns: {
          longest_key_len: number
          parent_id: string
          severity: string
          sibling_count: number
          table_name: string
        }[]
      }
      rpc_sort_key_health_scan_staff: {
        Args: never
        Returns: {
          longest_key_len: number
          parent_id: string
          severity: string
          sibling_count: number
          table_name: string
        }[]
      }
      search_companies_for_crew: {
        Args: { _limit?: number; _query: string }
        Returns: {
          cooldown_until: string
          has_existing_link: boolean
          id: string
          is_blocked: boolean
          name: string
        }[]
      }
      search_crew_book_global: {
        Args: { _company_id: string; _limit?: number; _query: string }
        Returns: {
          display_name: string
          has_existing_link: boolean
          headline: string
          is_redacted: boolean
          location_city: string
          location_country: string
          photo_url: string
          result_id: string
          skills: string[]
        }[]
      }
      search_crew_for_company: {
        Args: {
          _city?: string
          _company_id: string
          _country?: string
          _limit?: number
          _min_match?: number
          _offset?: number
          _query?: string
          _require_driving_licence?: boolean
          _require_passport?: boolean
          _skills?: string[]
        }
        Returns: {
          certification_count: number
          certifications: string[]
          date_of_birth: string
          display_name: string
          driving_licence_categories: string[]
          has_existing_link: boolean
          headline: string
          languages: string[]
          last_worked_at: string
          location_city: string
          location_country: string
          match_pct: number
          passport_held: boolean
          photo_url: string
          rate_currency: string
          rate_max: number
          rate_min: number
          result_id: string
          skills: string[]
          tier: string
          willing_to_travel_internationally: boolean
        }[]
      }
      send_availability_request: {
        Args: { _request_id: string }
        Returns: {
          recipients_dispatched: number
          request_id: string
          tokens_minted: number
        }[]
      }
      send_offers_for_shifts: {
        Args: { _shift_ids: string[] }
        Returns: {
          promoted: boolean
          reason: string
          shift_id: string
        }[]
      }
      set_crew_book_role: {
        Args: {
          _company_id: string
          _role: Database["public"]["Enums"]["crew_book_role"]
          _user_id: string
        }
        Returns: string
      }
      set_crew_profile_opt_out: {
        Args: {
          _crew_profile_id: string
          _ip?: string
          _opt_out: boolean
          _user_agent?: string
        }
        Returns: {
          about_me: string | null
          accessibility_needs: string | null
          address_line1: string | null
          address_line2: string | null
          address_postcode: string | null
          address_region: string | null
          ai_avatar_generated_at: string | null
          ai_avatar_path: string | null
          ai_avatar_style: string | null
          ai_avatar_url: string | null
          allergies: string | null
          availability_notes: string | null
          availability_status: Database["public"]["Enums"]["crew_availability"]
          avatar_url: string | null
          bio: string | null
          company_number: string | null
          created_at: string
          date_of_birth: string | null
          default_avatar_source: string
          deleted_at: string | null
          dietary_requirements: string | null
          discoverable_opt_out: boolean
          display_name: string
          display_name_is_custom: boolean
          driving_licence_categories: string[] | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          engagement_types: string[] | null
          first_name: string | null
          fun_fav_job: string | null
          fun_industry_story: string | null
          fun_proudest_role: string | null
          headline: string | null
          id: string
          inbound_email_on_approved: boolean
          inbound_email_on_invited: boolean
          inbound_email_on_reminder: boolean
          instagram_handle: string | null
          is_public: boolean
          languages: string[] | null
          last_dashboard_seen_at: string | null
          last_name: string | null
          linkedin_handle: string | null
          location_city: string | null
          location_country: string | null
          name_migration_required: boolean
          nationality: string | null
          nickname: string | null
          notice_period_days: number | null
          onboarding_step: Database["public"]["Enums"]["crew_onboarding_step"]
          outbound_email_on_accepted: boolean
          outbound_email_on_declined: boolean
          passport_held: boolean | null
          payment_method:
            | Database["public"]["Enums"]["crew_payment_method"]
            | null
          phone: string | null
          photo_url: string | null
          ppe_size: Database["public"]["Enums"]["apparel_size"] | null
          preferred_day_rate_currency: string | null
          preferred_day_rate_max: number | null
          preferred_day_rate_min: number | null
          profile_visibility_mode: Database["public"]["Enums"]["profile_visibility_mode"]
          pronouns: string | null
          showreel_url: string | null
          skills: string[] | null
          tax_residency_country: string | null
          tax_status: Database["public"]["Enums"]["crew_tax_status"] | null
          technical_skills_summary: string | null
          trading_name: string | null
          travel_willingness:
            | Database["public"]["Enums"]["crew_travel_willingness"]
            | null
          tshirt_size: Database["public"]["Enums"]["apparel_size"] | null
          updated_at: string
          user_id: string
          username: string | null
          utr_number: string | null
          vat_number: string | null
          vat_registered: boolean | null
          vehicle_owned: string | null
          visa_notes: string | null
          website_url: string | null
          willing_to_travel_internationally: boolean | null
          years_experience: number | null
        }
        SetofOptions: {
          from: "*"
          to: "crew_profiles"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      set_crew_profile_visibility_mode: {
        Args: {
          _crew_profile_id: string
          _ip?: string
          _new_mode: Database["public"]["Enums"]["profile_visibility_mode"]
          _user_agent?: string
        }
        Returns: {
          about_me: string | null
          accessibility_needs: string | null
          address_line1: string | null
          address_line2: string | null
          address_postcode: string | null
          address_region: string | null
          ai_avatar_generated_at: string | null
          ai_avatar_path: string | null
          ai_avatar_style: string | null
          ai_avatar_url: string | null
          allergies: string | null
          availability_notes: string | null
          availability_status: Database["public"]["Enums"]["crew_availability"]
          avatar_url: string | null
          bio: string | null
          company_number: string | null
          created_at: string
          date_of_birth: string | null
          default_avatar_source: string
          deleted_at: string | null
          dietary_requirements: string | null
          discoverable_opt_out: boolean
          display_name: string
          display_name_is_custom: boolean
          driving_licence_categories: string[] | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relationship: string | null
          engagement_types: string[] | null
          first_name: string | null
          fun_fav_job: string | null
          fun_industry_story: string | null
          fun_proudest_role: string | null
          headline: string | null
          id: string
          inbound_email_on_approved: boolean
          inbound_email_on_invited: boolean
          inbound_email_on_reminder: boolean
          instagram_handle: string | null
          is_public: boolean
          languages: string[] | null
          last_dashboard_seen_at: string | null
          last_name: string | null
          linkedin_handle: string | null
          location_city: string | null
          location_country: string | null
          name_migration_required: boolean
          nationality: string | null
          nickname: string | null
          notice_period_days: number | null
          onboarding_step: Database["public"]["Enums"]["crew_onboarding_step"]
          outbound_email_on_accepted: boolean
          outbound_email_on_declined: boolean
          passport_held: boolean | null
          payment_method:
            | Database["public"]["Enums"]["crew_payment_method"]
            | null
          phone: string | null
          photo_url: string | null
          ppe_size: Database["public"]["Enums"]["apparel_size"] | null
          preferred_day_rate_currency: string | null
          preferred_day_rate_max: number | null
          preferred_day_rate_min: number | null
          profile_visibility_mode: Database["public"]["Enums"]["profile_visibility_mode"]
          pronouns: string | null
          showreel_url: string | null
          skills: string[] | null
          tax_residency_country: string | null
          tax_status: Database["public"]["Enums"]["crew_tax_status"] | null
          technical_skills_summary: string | null
          trading_name: string | null
          travel_willingness:
            | Database["public"]["Enums"]["crew_travel_willingness"]
            | null
          tshirt_size: Database["public"]["Enums"]["apparel_size"] | null
          updated_at: string
          user_id: string
          username: string | null
          utr_number: string | null
          vat_number: string | null
          vat_registered: boolean | null
          vehicle_owned: string | null
          visa_notes: string | null
          website_url: string | null
          willing_to_travel_internationally: boolean | null
          years_experience: number | null
        }
        SetofOptions: {
          from: "*"
          to: "crew_profiles"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      set_my_profile_visibility_mode: {
        Args: {
          _crew_profile_id: string
          _mode: Database["public"]["Enums"]["profile_visibility_mode"]
          _reset_overrides?: boolean
        }
        Returns: undefined
      }
      show_limit: { Args: never; Returns: number }
      show_trgm: { Args: { "": string }; Returns: string[] }
      sweep_filled_availability_requests: {
        Args: never
        Returns: {
          request_id: string
        }[]
      }
      sweep_manager_activity_digests: {
        Args: never
        Returns: {
          accepted_links_7d: number
          admin_email: string
          admin_name: string
          admin_user_id: string
          company_id: string
          company_name: string
          declined_links_7d: number
          new_outbound_requests_7d: number
          pending_inbound_count: number
          pending_outbound_count: number
        }[]
      }
      sweep_pending_invitation_reminders: {
        Args: never
        Returns: {
          company_id: string
          company_name: string
          crew_profile_id: string
          freelancer_email: string
          freelancer_name: string
          invited_days_ago: number
          link_id: string
        }[]
      }
      unblock_company: {
        Args: { _company_id: string; _crew_profile_id: string }
        Returns: undefined
      }
      unlink_from_company: {
        Args: {
          _company_id: string
          _crew_profile_id: string
          _reason?: string
        }
        Returns: undefined
      }
      unmute_company_communications: {
        Args: { _company_id: string; _crew_profile_id: string }
        Returns: undefined
      }
      user_can_access_technical_file: {
        Args: { _object_name: string }
        Returns: boolean
      }
      user_owns_crew_profile: {
        Args: { _crew_profile_id: string; _user_id: string }
        Returns: boolean
      }
      validate_placeholder_invite_token: {
        Args: { _token: string }
        Returns: {
          company_id: string
          company_name: string
          consumed: boolean
          display_name: string
          email: string
          expired: boolean
          expires_at: string
          invite_id: string
          placeholder_id: string
          project_id: string
          project_name: string
        }[]
      }
      withdraw_availability_request_recipient: {
        Args: { _reason?: string; _recipient_id: string; _request_id: string }
        Returns: {
          reason_code: string
          recipient_id: string
          success: boolean
        }[]
      }
      withdraw_my_outbound_link_request: {
        Args: { _link_id: string; _reason?: string }
        Returns: undefined
      }
    }
    Enums: {
      access_level: "allow" | "deny"
      actor_type: "user" | "ai_agent"
      app_role:
        | "company_super_admin"
        | "company_admin"
        | "project_manager"
        | "project_user"
        | "project_view"
        | "project_view_comment"
        | "project_client"
        | "project_client_comment"
        | "dev_admin"
        | "dev_view"
        | "tooltip_editor"
        | "library_seed_manager"
        | "crew_freelancer"
        | "crew_coordinator"
        | "staff_scheduler"
      apparel_size: "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl"
      availability_recipient_kind: "crew_member" | "ad_hoc"
      availability_request_delivery_mode: "system_sent" | "copy_paste"
      availability_request_format: "branded_html" | "plain_text"
      availability_request_job_status:
        | "preliminary_job_crewing"
        | "provisional_job_crewing"
        | "confirmed_job_crewing"
      availability_request_state: "draft" | "open" | "closed" | "expired"
      availability_request_type: "single" | "multi"
      availability_response_source: "portal" | "token_link" | "manual"
      availability_response_state:
        | "pending"
        | "yes"
        | "no"
        | "maybe"
        | "no_reply_expired"
        | "withdrawn"
      company_status: "active" | "suspended" | "archived"
      crew_availability: "available" | "busy" | "unavailable" | "not_set"
      crew_book_role: "view" | "edit" | "approve" | "admin"
      crew_call_sync_mode: "auto" | "manual" | "none"
      crew_call_sync_status: "unlinked" | "synced" | "stale"
      crew_document_type:
        | "certification"
        | "insurance"
        | "right_to_work"
        | "dbs_check"
        | "driving_licence"
        | "first_aid"
        | "health_safety"
        | "other"
      crew_field_type:
        | "text"
        | "long_text"
        | "number"
        | "date"
        | "single_select"
        | "multi_select"
        | "file"
        | "url"
        | "email"
        | "phone"
        | "address"
        | "repeating_group"
        | "boolean"
      crew_insurance_type:
        | "public_liability"
        | "professional_indemnity"
        | "employers_liability"
        | "other"
      crew_link_initiator: "company" | "freelancer"
      crew_link_status:
        | "pending_company"
        | "pending_freelancer"
        | "active"
        | "revoked"
        | "expired"
        | "ended"
        | "declined"
        | "withdrawn"
      crew_onboarding_step:
        | "not_started"
        | "basics"
        | "role_and_skills"
        | "availability"
        | "documents"
        | "privacy"
        | "contact"
        | "bio_handle"
        | "review"
        | "complete"
        | "name"
        | "contact_method"
        | "personal"
        | "photo"
        | "bio"
        | "qualifications"
        | "insurance"
        | "welfare"
        | "driving_travel"
        | "financial"
      crew_payment_method: "sole_trader" | "limited_company" | "paye" | "other"
      crew_requirement_severity: "informational" | "warning" | "strong_warning"
      crew_requirement_type: "profile_field" | "document_type" | "custom_field"
      crew_skill_proficiency:
        | "beginner"
        | "intermediate"
        | "advanced"
        | "expert"
      crew_tax_status: "sole_trader" | "limited_company" | "paye" | "other"
      crew_travel_willingness: "local" | "national" | "international"
      delivery_status:
        | "planned"
        | "confirmed"
        | "in_transit"
        | "arrived"
        | "unloading"
        | "completed"
        | "cancelled"
      dev_access_type: "user" | "company"
      field_visibility: "public" | "linked_companies" | "private"
      identity_status:
        | "invited"
        | "active"
        | "suspended"
        | "revoked"
        | "expired"
        | "archived"
        | "pending_approval"
        | "blocked"
      invitation_status: "pending" | "accepted" | "expired" | "revoked"
      membership_status: "active" | "suspended" | "removed"
      module_availability_tier: "free" | "paid" | "dev" | "coming_soon"
      module_unlock_method: "free" | "purchase" | "subscription" | "grant"
      overtime_rate_type: "hourly" | "fixed"
      profile_visibility_mode: "public" | "hidden_details" | "private"
      project_status: "draft" | "live" | "completed" | "cancelled"
      route_endpoint_type: "venue_loading_bay" | "supplier_address"
      route_stop_type: "load" | "unload"
      schedule_item_status: "draft" | "confirmed" | "issued" | "cancelled"
      schedule_item_type: "schedule_native" | "linked_projection"
      schedule_status: "draft" | "live" | "completed" | "cancelled"
      skill_node_type: "discipline" | "sub_discipline" | "skill"
      skill_suggestion_source: "new_skill" | "promotion" | "rescan"
      skill_suggestion_status: "pending" | "promoted" | "rejected" | "merged"
      staff_assignment_stage:
        | "concept"
        | "preliminary"
        | "assigned_pending"
        | "confirmed"
      staff_cancellation_reason:
        | "client_cancelled"
        | "scope_changed"
        | "crew_unavailable"
        | "duplicate"
        | "budget"
        | "weather"
        | "other"
      staff_member_status: "active" | "inactive" | "cancelled"
      staff_notification_audience: "crew" | "manager"
      staff_notification_kind:
        | "offer_sent"
        | "offer_expired"
        | "offer_accepted"
        | "offer_declined"
        | "offer_rescinded"
        | "shift_renegotiated"
        | "shift_cancelled"
        | "placeholder_offer_sent"
        | "placeholder_offer_expired"
        | "placeholder_link_suggested"
        | "placeholder_link_confirmed"
        | "offer_batch_sent"
        | "placeholder_offer_batch_sent"
        | "availability_request_sent"
        | "availability_request_response_received"
        | "availability_request_expired"
        | "availability_request_closed"
        | "availability_request_filled"
        | "crew_link_request_accepted"
        | "crew_link_request_declined"
        | "crew_link_request_expired"
      staff_pattern_propagation_policy: "always" | "manual"
      subscription_status:
        | "active"
        | "trialing"
        | "past_due"
        | "cancelled"
        | "expired"
      sync_status: "live" | "stale" | "orphaned"
      text_size_preference: "xxsmall" | "xsmall" | "small" | "medium" | "large"
      user_type: "full" | "guest" | "crew_freelancer"
      validation_severity: "info" | "warning" | "error"
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
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
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
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
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
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
      access_level: ["allow", "deny"],
      actor_type: ["user", "ai_agent"],
      app_role: [
        "company_super_admin",
        "company_admin",
        "project_manager",
        "project_user",
        "project_view",
        "project_view_comment",
        "project_client",
        "project_client_comment",
        "dev_admin",
        "dev_view",
        "tooltip_editor",
        "library_seed_manager",
        "crew_freelancer",
        "crew_coordinator",
        "staff_scheduler",
      ],
      apparel_size: ["xs", "s", "m", "l", "xl", "xxl", "xxxl"],
      availability_recipient_kind: ["crew_member", "ad_hoc"],
      availability_request_delivery_mode: ["system_sent", "copy_paste"],
      availability_request_format: ["branded_html", "plain_text"],
      availability_request_job_status: [
        "preliminary_job_crewing",
        "provisional_job_crewing",
        "confirmed_job_crewing",
      ],
      availability_request_state: ["draft", "open", "closed", "expired"],
      availability_request_type: ["single", "multi"],
      availability_response_source: ["portal", "token_link", "manual"],
      availability_response_state: [
        "pending",
        "yes",
        "no",
        "maybe",
        "no_reply_expired",
        "withdrawn",
      ],
      company_status: ["active", "suspended", "archived"],
      crew_availability: ["available", "busy", "unavailable", "not_set"],
      crew_book_role: ["view", "edit", "approve", "admin"],
      crew_call_sync_mode: ["auto", "manual", "none"],
      crew_call_sync_status: ["unlinked", "synced", "stale"],
      crew_document_type: [
        "certification",
        "insurance",
        "right_to_work",
        "dbs_check",
        "driving_licence",
        "first_aid",
        "health_safety",
        "other",
      ],
      crew_field_type: [
        "text",
        "long_text",
        "number",
        "date",
        "single_select",
        "multi_select",
        "file",
        "url",
        "email",
        "phone",
        "address",
        "repeating_group",
        "boolean",
      ],
      crew_insurance_type: [
        "public_liability",
        "professional_indemnity",
        "employers_liability",
        "other",
      ],
      crew_link_initiator: ["company", "freelancer"],
      crew_link_status: [
        "pending_company",
        "pending_freelancer",
        "active",
        "revoked",
        "expired",
        "ended",
        "declined",
        "withdrawn",
      ],
      crew_onboarding_step: [
        "not_started",
        "basics",
        "role_and_skills",
        "availability",
        "documents",
        "privacy",
        "contact",
        "bio_handle",
        "review",
        "complete",
        "name",
        "contact_method",
        "personal",
        "photo",
        "bio",
        "qualifications",
        "insurance",
        "welfare",
        "driving_travel",
        "financial",
      ],
      crew_payment_method: ["sole_trader", "limited_company", "paye", "other"],
      crew_requirement_severity: ["informational", "warning", "strong_warning"],
      crew_requirement_type: ["profile_field", "document_type", "custom_field"],
      crew_skill_proficiency: [
        "beginner",
        "intermediate",
        "advanced",
        "expert",
      ],
      crew_tax_status: ["sole_trader", "limited_company", "paye", "other"],
      crew_travel_willingness: ["local", "national", "international"],
      delivery_status: [
        "planned",
        "confirmed",
        "in_transit",
        "arrived",
        "unloading",
        "completed",
        "cancelled",
      ],
      dev_access_type: ["user", "company"],
      field_visibility: ["public", "linked_companies", "private"],
      identity_status: [
        "invited",
        "active",
        "suspended",
        "revoked",
        "expired",
        "archived",
        "pending_approval",
        "blocked",
      ],
      invitation_status: ["pending", "accepted", "expired", "revoked"],
      membership_status: ["active", "suspended", "removed"],
      module_availability_tier: ["free", "paid", "dev", "coming_soon"],
      module_unlock_method: ["free", "purchase", "subscription", "grant"],
      overtime_rate_type: ["hourly", "fixed"],
      profile_visibility_mode: ["public", "hidden_details", "private"],
      project_status: ["draft", "live", "completed", "cancelled"],
      route_endpoint_type: ["venue_loading_bay", "supplier_address"],
      route_stop_type: ["load", "unload"],
      schedule_item_status: ["draft", "confirmed", "issued", "cancelled"],
      schedule_item_type: ["schedule_native", "linked_projection"],
      schedule_status: ["draft", "live", "completed", "cancelled"],
      skill_node_type: ["discipline", "sub_discipline", "skill"],
      skill_suggestion_source: ["new_skill", "promotion", "rescan"],
      skill_suggestion_status: ["pending", "promoted", "rejected", "merged"],
      staff_assignment_stage: [
        "concept",
        "preliminary",
        "assigned_pending",
        "confirmed",
      ],
      staff_cancellation_reason: [
        "client_cancelled",
        "scope_changed",
        "crew_unavailable",
        "duplicate",
        "budget",
        "weather",
        "other",
      ],
      staff_member_status: ["active", "inactive", "cancelled"],
      staff_notification_audience: ["crew", "manager"],
      staff_notification_kind: [
        "offer_sent",
        "offer_expired",
        "offer_accepted",
        "offer_declined",
        "offer_rescinded",
        "shift_renegotiated",
        "shift_cancelled",
        "placeholder_offer_sent",
        "placeholder_offer_expired",
        "placeholder_link_suggested",
        "placeholder_link_confirmed",
        "offer_batch_sent",
        "placeholder_offer_batch_sent",
        "availability_request_sent",
        "availability_request_response_received",
        "availability_request_expired",
        "availability_request_closed",
        "availability_request_filled",
        "crew_link_request_accepted",
        "crew_link_request_declined",
        "crew_link_request_expired",
      ],
      staff_pattern_propagation_policy: ["always", "manual"],
      subscription_status: [
        "active",
        "trialing",
        "past_due",
        "cancelled",
        "expired",
      ],
      sync_status: ["live", "stale", "orphaned"],
      text_size_preference: ["xxsmall", "xsmall", "small", "medium", "large"],
      user_type: ["full", "guest", "crew_freelancer"],
      validation_severity: ["info", "warning", "error"],
    },
  },
} as const

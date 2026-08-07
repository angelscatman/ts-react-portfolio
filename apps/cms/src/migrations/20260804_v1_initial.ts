import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('es', 'en');
  CREATE TYPE "public"."enum_media_usage" AS ENUM('brand', 'project', 'article', 'profile', 'social', 'instagram', 'case-study', 'background', 'other');
  CREATE TYPE "public"."enum_projects_blocks_body_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_body_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_body_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_body_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_projects_blocks_body_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_projects_blocks_body_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_projects_blocks_body_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_projects_blocks_media_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum_projects_blocks_media_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_media_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_media_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_media_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_projects_blocks_media_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_projects_blocks_media_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_projects_blocks_media_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_projects_blocks_gallery_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum_projects_blocks_gallery_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_gallery_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_gallery_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_gallery_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_projects_blocks_gallery_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_projects_blocks_gallery_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_projects_blocks_gallery_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_projects_blocks_feature_list_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_feature_list_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_feature_list_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_feature_list_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_projects_blocks_feature_list_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_projects_blocks_feature_list_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_projects_blocks_feature_list_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_projects_blocks_metrics_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_metrics_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_metrics_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_metrics_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_projects_blocks_metrics_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_projects_blocks_metrics_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_projects_blocks_metrics_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_projects_blocks_callout_tone" AS ENUM('default', 'muted', 'strong', 'warning');
  CREATE TYPE "public"."enum_projects_blocks_callout_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_callout_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_callout_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_callout_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_projects_blocks_callout_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_projects_blocks_callout_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_projects_blocks_callout_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_projects_blocks_quote_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_quote_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_quote_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_quote_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_projects_blocks_quote_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_projects_blocks_quote_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_projects_blocks_quote_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_projects_blocks_cta_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_projects_blocks_cta_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_projects_blocks_cta_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_cta_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_projects_blocks_cta_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_projects_blocks_cta_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_projects_blocks_cta_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_projects_blocks_cta_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_projects_destination_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__projects_v_blocks_body_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_body_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_body_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_body_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__projects_v_blocks_body_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__projects_v_blocks_body_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__projects_v_blocks_body_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__projects_v_blocks_media_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum__projects_v_blocks_media_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_media_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_media_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_media_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__projects_v_blocks_media_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__projects_v_blocks_media_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__projects_v_blocks_media_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__projects_v_blocks_gallery_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum__projects_v_blocks_gallery_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__projects_v_blocks_feature_list_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__projects_v_blocks_metrics_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__projects_v_blocks_callout_tone" AS ENUM('default', 'muted', 'strong', 'warning');
  CREATE TYPE "public"."enum__projects_v_blocks_callout_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_callout_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_callout_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_callout_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__projects_v_blocks_callout_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__projects_v_blocks_callout_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__projects_v_blocks_callout_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__projects_v_blocks_quote_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_quote_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_quote_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_quote_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__projects_v_blocks_quote_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__projects_v_blocks_quote_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__projects_v_blocks_quote_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__projects_v_blocks_cta_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_version_destination_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__projects_v_published_locale" AS ENUM('es', 'en');
  CREATE TYPE "public"."enum_articles_blocks_body_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_articles_blocks_body_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_body_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_body_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_articles_blocks_body_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_articles_blocks_body_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_articles_blocks_body_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_articles_blocks_media_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum_articles_blocks_media_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_articles_blocks_media_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_media_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_media_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_articles_blocks_media_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_articles_blocks_media_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_articles_blocks_media_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_articles_blocks_gallery_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum_articles_blocks_gallery_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_articles_blocks_gallery_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_gallery_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_gallery_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_articles_blocks_gallery_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_articles_blocks_gallery_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_articles_blocks_gallery_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_articles_blocks_feature_list_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_articles_blocks_feature_list_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_feature_list_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_feature_list_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_articles_blocks_feature_list_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_articles_blocks_feature_list_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_articles_blocks_feature_list_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_articles_blocks_metrics_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_articles_blocks_metrics_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_metrics_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_metrics_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_articles_blocks_metrics_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_articles_blocks_metrics_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_articles_blocks_metrics_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_articles_blocks_callout_tone" AS ENUM('default', 'muted', 'strong', 'warning');
  CREATE TYPE "public"."enum_articles_blocks_callout_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_articles_blocks_callout_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_callout_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_callout_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_articles_blocks_callout_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_articles_blocks_callout_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_articles_blocks_callout_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_articles_blocks_quote_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_articles_blocks_quote_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_quote_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_quote_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_articles_blocks_quote_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_articles_blocks_quote_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_articles_blocks_quote_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_articles_blocks_cta_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_articles_blocks_cta_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_articles_blocks_cta_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_cta_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_articles_blocks_cta_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_articles_blocks_cta_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_articles_blocks_cta_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_articles_blocks_cta_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_articles_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_articles_destination_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__articles_v_blocks_body_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__articles_v_blocks_body_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_body_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_body_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__articles_v_blocks_body_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__articles_v_blocks_body_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__articles_v_blocks_body_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__articles_v_blocks_media_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum__articles_v_blocks_media_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__articles_v_blocks_media_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_media_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_media_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__articles_v_blocks_media_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__articles_v_blocks_media_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__articles_v_blocks_media_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__articles_v_blocks_gallery_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum__articles_v_blocks_gallery_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__articles_v_blocks_feature_list_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__articles_v_blocks_metrics_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__articles_v_blocks_callout_tone" AS ENUM('default', 'muted', 'strong', 'warning');
  CREATE TYPE "public"."enum__articles_v_blocks_callout_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__articles_v_blocks_callout_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_callout_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_callout_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__articles_v_blocks_callout_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__articles_v_blocks_callout_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__articles_v_blocks_callout_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__articles_v_blocks_quote_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__articles_v_blocks_quote_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_quote_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_quote_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__articles_v_blocks_quote_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__articles_v_blocks_quote_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__articles_v_blocks_quote_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__articles_v_blocks_cta_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__articles_v_blocks_cta_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum__articles_v_blocks_cta_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_cta_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum__articles_v_blocks_cta_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__articles_v_blocks_cta_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__articles_v_blocks_cta_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum__articles_v_blocks_cta_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum__articles_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__articles_v_version_destination_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__articles_v_published_locale" AS ENUM('es', 'en');
  CREATE TYPE "public"."enum_pages_blocks_body_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_body_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_body_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_body_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_body_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_body_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_pages_blocks_body_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_pages_blocks_media_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum_pages_blocks_media_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_media_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_media_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_media_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_media_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_media_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_pages_blocks_media_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_pages_blocks_gallery_layout_preset" AS ENUM('inline', 'split', 'wide', 'fullBleed');
  CREATE TYPE "public"."enum_pages_blocks_gallery_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_gallery_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_gallery_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_gallery_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_gallery_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_gallery_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_pages_blocks_gallery_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_pages_blocks_metrics_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_metrics_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_metrics_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_metrics_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_metrics_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_metrics_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_pages_blocks_metrics_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_pages_blocks_callout_tone" AS ENUM('default', 'muted', 'strong', 'warning');
  CREATE TYPE "public"."enum_pages_blocks_callout_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_callout_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_callout_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_callout_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_callout_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_callout_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_pages_blocks_callout_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_pages_blocks_quote_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_quote_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_quote_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_quote_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_quote_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_quote_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_pages_blocks_quote_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_pages_blocks_cta_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_cta_style_preset" AS ENUM('default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_advanced_style_weight" AS ENUM('soft', 'default', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_cta_advanced_style_tone" AS ENUM('default', 'muted', 'strong');
  CREATE TYPE "public"."enum_pages_blocks_cta_advanced_style_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_cta_advanced_style_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_cta_advanced_style_spacing" AS ENUM('tight', 'default', 'relaxed');
  CREATE TYPE "public"."enum_pages_blocks_cta_advanced_style_layout" AS ENUM('inline', 'contained', 'wide', 'full');
  CREATE TYPE "public"."enum_pages_slug" AS ENUM('work', 'blog', 'about', 'resume', 'not-found', 'error');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_site_default_locale" AS ENUM('es', 'en');
  CREATE TYPE "public"."enum_social_links_key" AS ENUM('github', 'linkedin', 'email');
  CREATE TYPE "public"."enum_social_links_cursor_icon" AS ENUM('none', 'arrow', 'eye', 'mail', 'github', 'linkedin', 'camera', 'music');
  CREATE TYPE "public"."enum_about_page_copy_intro_contact_line_links" AS ENUM('linkedin', 'github', 'email');
  CREATE TYPE "public"."enum_about_page_copy_gallery_sections_images_cursor_icon" AS ENUM('none', 'arrow', 'eye', 'mail', 'github', 'linkedin', 'camera', 'music');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media_folders" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"asset_key" varchar NOT NULL,
  	"folder_id" integer,
  	"usage" "enum_media_usage",
  	"original_path" varchar,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "projects_blocks_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_projects_blocks_body_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_projects_blocks_body_advanced_style_weight",
  	"advanced_style_tone" "enum_projects_blocks_body_advanced_style_tone",
  	"advanced_style_size" "enum_projects_blocks_body_advanced_style_size",
  	"advanced_style_align" "enum_projects_blocks_body_advanced_style_align",
  	"advanced_style_spacing" "enum_projects_blocks_body_advanced_style_spacing",
  	"advanced_style_layout" "enum_projects_blocks_body_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_body_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"layout_preset" "enum_projects_blocks_media_layout_preset" DEFAULT 'inline',
  	"style_preset" "enum_projects_blocks_media_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_projects_blocks_media_advanced_style_weight",
  	"advanced_style_tone" "enum_projects_blocks_media_advanced_style_tone",
  	"advanced_style_size" "enum_projects_blocks_media_advanced_style_size",
  	"advanced_style_align" "enum_projects_blocks_media_advanced_style_align",
  	"advanced_style_spacing" "enum_projects_blocks_media_advanced_style_spacing",
  	"advanced_style_layout" "enum_projects_blocks_media_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_media_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "projects_blocks_gallery_items_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout_preset" "enum_projects_blocks_gallery_layout_preset" DEFAULT 'inline',
  	"style_preset" "enum_projects_blocks_gallery_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_projects_blocks_gallery_advanced_style_weight",
  	"advanced_style_tone" "enum_projects_blocks_gallery_advanced_style_tone",
  	"advanced_style_size" "enum_projects_blocks_gallery_advanced_style_size",
  	"advanced_style_align" "enum_projects_blocks_gallery_advanced_style_align",
  	"advanced_style_spacing" "enum_projects_blocks_gallery_advanced_style_spacing",
  	"advanced_style_layout" "enum_projects_blocks_gallery_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_feature_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "projects_blocks_feature_list_items_locales" (
  	"label" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_projects_blocks_feature_list_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_projects_blocks_feature_list_advanced_style_weight",
  	"advanced_style_tone" "enum_projects_blocks_feature_list_advanced_style_tone",
  	"advanced_style_size" "enum_projects_blocks_feature_list_advanced_style_size",
  	"advanced_style_align" "enum_projects_blocks_feature_list_advanced_style_align",
  	"advanced_style_spacing" "enum_projects_blocks_feature_list_advanced_style_spacing",
  	"advanced_style_layout" "enum_projects_blocks_feature_list_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_feature_list_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_metrics_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "projects_blocks_metrics_items_locales" (
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_projects_blocks_metrics_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_projects_blocks_metrics_advanced_style_weight",
  	"advanced_style_tone" "enum_projects_blocks_metrics_advanced_style_tone",
  	"advanced_style_size" "enum_projects_blocks_metrics_advanced_style_size",
  	"advanced_style_align" "enum_projects_blocks_metrics_advanced_style_align",
  	"advanced_style_spacing" "enum_projects_blocks_metrics_advanced_style_spacing",
  	"advanced_style_layout" "enum_projects_blocks_metrics_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_metrics_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "enum_projects_blocks_callout_tone",
  	"style_preset" "enum_projects_blocks_callout_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_projects_blocks_callout_advanced_style_weight",
  	"advanced_style_tone" "enum_projects_blocks_callout_advanced_style_tone",
  	"advanced_style_size" "enum_projects_blocks_callout_advanced_style_size",
  	"advanced_style_align" "enum_projects_blocks_callout_advanced_style_align",
  	"advanced_style_spacing" "enum_projects_blocks_callout_advanced_style_spacing",
  	"advanced_style_layout" "enum_projects_blocks_callout_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_callout_locales" (
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_projects_blocks_quote_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_projects_blocks_quote_advanced_style_weight",
  	"advanced_style_tone" "enum_projects_blocks_quote_advanced_style_tone",
  	"advanced_style_size" "enum_projects_blocks_quote_advanced_style_size",
  	"advanced_style_align" "enum_projects_blocks_quote_advanced_style_align",
  	"advanced_style_spacing" "enum_projects_blocks_quote_advanced_style_spacing",
  	"advanced_style_layout" "enum_projects_blocks_quote_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_quote_locales" (
  	"content" jsonb,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"type" "enum_projects_blocks_cta_type" DEFAULT 'internal',
  	"style_preset" "enum_projects_blocks_cta_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_projects_blocks_cta_advanced_style_weight",
  	"advanced_style_tone" "enum_projects_blocks_cta_advanced_style_tone",
  	"advanced_style_size" "enum_projects_blocks_cta_advanced_style_size",
  	"advanced_style_align" "enum_projects_blocks_cta_advanced_style_align",
  	"advanced_style_spacing" "enum_projects_blocks_cta_advanced_style_spacing",
  	"advanced_style_layout" "enum_projects_blocks_cta_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_cta_locales" (
  	"title" varchar,
  	"description" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "projects_sections_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "projects_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "projects_meta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"status" "enum_projects_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"featured" boolean,
  	"cover_image_id" integer,
  	"destination_href" varchar,
  	"destination_type" "enum_projects_destination_type",
  	"year" varchar,
  	"seo_image_id" integer,
  	"seo_no_index" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "projects_locales" (
  	"title" varchar,
  	"excerpt" varchar,
  	"cover_alt" varchar,
  	"destination_label" varchar,
  	"role" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style_preset" "enum__projects_v_blocks_body_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__projects_v_blocks_body_advanced_style_weight",
  	"advanced_style_tone" "enum__projects_v_blocks_body_advanced_style_tone",
  	"advanced_style_size" "enum__projects_v_blocks_body_advanced_style_size",
  	"advanced_style_align" "enum__projects_v_blocks_body_advanced_style_align",
  	"advanced_style_spacing" "enum__projects_v_blocks_body_advanced_style_spacing",
  	"advanced_style_layout" "enum__projects_v_blocks_body_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_body_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"layout_preset" "enum__projects_v_blocks_media_layout_preset" DEFAULT 'inline',
  	"style_preset" "enum__projects_v_blocks_media_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__projects_v_blocks_media_advanced_style_weight",
  	"advanced_style_tone" "enum__projects_v_blocks_media_advanced_style_tone",
  	"advanced_style_size" "enum__projects_v_blocks_media_advanced_style_size",
  	"advanced_style_align" "enum__projects_v_blocks_media_advanced_style_align",
  	"advanced_style_spacing" "enum__projects_v_blocks_media_advanced_style_spacing",
  	"advanced_style_layout" "enum__projects_v_blocks_media_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_media_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_gallery_items_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout_preset" "enum__projects_v_blocks_gallery_layout_preset" DEFAULT 'inline',
  	"style_preset" "enum__projects_v_blocks_gallery_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__projects_v_blocks_gallery_advanced_style_weight",
  	"advanced_style_tone" "enum__projects_v_blocks_gallery_advanced_style_tone",
  	"advanced_style_size" "enum__projects_v_blocks_gallery_advanced_style_size",
  	"advanced_style_align" "enum__projects_v_blocks_gallery_advanced_style_align",
  	"advanced_style_spacing" "enum__projects_v_blocks_gallery_advanced_style_spacing",
  	"advanced_style_layout" "enum__projects_v_blocks_gallery_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_feature_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_feature_list_items_locales" (
  	"label" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style_preset" "enum__projects_v_blocks_feature_list_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__projects_v_blocks_feature_list_advanced_style_weight",
  	"advanced_style_tone" "enum__projects_v_blocks_feature_list_advanced_style_tone",
  	"advanced_style_size" "enum__projects_v_blocks_feature_list_advanced_style_size",
  	"advanced_style_align" "enum__projects_v_blocks_feature_list_advanced_style_align",
  	"advanced_style_spacing" "enum__projects_v_blocks_feature_list_advanced_style_spacing",
  	"advanced_style_layout" "enum__projects_v_blocks_feature_list_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_feature_list_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_metrics_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_metrics_items_locales" (
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style_preset" "enum__projects_v_blocks_metrics_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__projects_v_blocks_metrics_advanced_style_weight",
  	"advanced_style_tone" "enum__projects_v_blocks_metrics_advanced_style_tone",
  	"advanced_style_size" "enum__projects_v_blocks_metrics_advanced_style_size",
  	"advanced_style_align" "enum__projects_v_blocks_metrics_advanced_style_align",
  	"advanced_style_spacing" "enum__projects_v_blocks_metrics_advanced_style_spacing",
  	"advanced_style_layout" "enum__projects_v_blocks_metrics_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_metrics_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tone" "enum__projects_v_blocks_callout_tone",
  	"style_preset" "enum__projects_v_blocks_callout_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__projects_v_blocks_callout_advanced_style_weight",
  	"advanced_style_tone" "enum__projects_v_blocks_callout_advanced_style_tone",
  	"advanced_style_size" "enum__projects_v_blocks_callout_advanced_style_size",
  	"advanced_style_align" "enum__projects_v_blocks_callout_advanced_style_align",
  	"advanced_style_spacing" "enum__projects_v_blocks_callout_advanced_style_spacing",
  	"advanced_style_layout" "enum__projects_v_blocks_callout_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_callout_locales" (
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style_preset" "enum__projects_v_blocks_quote_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__projects_v_blocks_quote_advanced_style_weight",
  	"advanced_style_tone" "enum__projects_v_blocks_quote_advanced_style_tone",
  	"advanced_style_size" "enum__projects_v_blocks_quote_advanced_style_size",
  	"advanced_style_align" "enum__projects_v_blocks_quote_advanced_style_align",
  	"advanced_style_spacing" "enum__projects_v_blocks_quote_advanced_style_spacing",
  	"advanced_style_layout" "enum__projects_v_blocks_quote_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_quote_locales" (
  	"content" jsonb,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"type" "enum__projects_v_blocks_cta_type" DEFAULT 'internal',
  	"style_preset" "enum__projects_v_blocks_cta_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__projects_v_blocks_cta_advanced_style_weight",
  	"advanced_style_tone" "enum__projects_v_blocks_cta_advanced_style_tone",
  	"advanced_style_size" "enum__projects_v_blocks_cta_advanced_style_size",
  	"advanced_style_align" "enum__projects_v_blocks_cta_advanced_style_align",
  	"advanced_style_spacing" "enum__projects_v_blocks_cta_advanced_style_spacing",
  	"advanced_style_layout" "enum__projects_v_blocks_cta_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_cta_locales" (
  	"title" varchar,
  	"description" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_sections_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_meta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"version_published_at" timestamp(3) with time zone,
  	"version_featured" boolean,
  	"version_cover_image_id" integer,
  	"version_destination_href" varchar,
  	"version_destination_type" "enum__projects_v_version_destination_type",
  	"version_year" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__projects_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_projects_v_locales" (
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"version_cover_alt" varchar,
  	"version_destination_label" varchar,
  	"version_role" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "articles_blocks_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_articles_blocks_body_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_articles_blocks_body_advanced_style_weight",
  	"advanced_style_tone" "enum_articles_blocks_body_advanced_style_tone",
  	"advanced_style_size" "enum_articles_blocks_body_advanced_style_size",
  	"advanced_style_align" "enum_articles_blocks_body_advanced_style_align",
  	"advanced_style_spacing" "enum_articles_blocks_body_advanced_style_spacing",
  	"advanced_style_layout" "enum_articles_blocks_body_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_blocks_body_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"layout_preset" "enum_articles_blocks_media_layout_preset" DEFAULT 'inline',
  	"style_preset" "enum_articles_blocks_media_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_articles_blocks_media_advanced_style_weight",
  	"advanced_style_tone" "enum_articles_blocks_media_advanced_style_tone",
  	"advanced_style_size" "enum_articles_blocks_media_advanced_style_size",
  	"advanced_style_align" "enum_articles_blocks_media_advanced_style_align",
  	"advanced_style_spacing" "enum_articles_blocks_media_advanced_style_spacing",
  	"advanced_style_layout" "enum_articles_blocks_media_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_blocks_media_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "articles_blocks_gallery_items_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout_preset" "enum_articles_blocks_gallery_layout_preset" DEFAULT 'inline',
  	"style_preset" "enum_articles_blocks_gallery_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_articles_blocks_gallery_advanced_style_weight",
  	"advanced_style_tone" "enum_articles_blocks_gallery_advanced_style_tone",
  	"advanced_style_size" "enum_articles_blocks_gallery_advanced_style_size",
  	"advanced_style_align" "enum_articles_blocks_gallery_advanced_style_align",
  	"advanced_style_spacing" "enum_articles_blocks_gallery_advanced_style_spacing",
  	"advanced_style_layout" "enum_articles_blocks_gallery_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_blocks_feature_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "articles_blocks_feature_list_items_locales" (
  	"label" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_articles_blocks_feature_list_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_articles_blocks_feature_list_advanced_style_weight",
  	"advanced_style_tone" "enum_articles_blocks_feature_list_advanced_style_tone",
  	"advanced_style_size" "enum_articles_blocks_feature_list_advanced_style_size",
  	"advanced_style_align" "enum_articles_blocks_feature_list_advanced_style_align",
  	"advanced_style_spacing" "enum_articles_blocks_feature_list_advanced_style_spacing",
  	"advanced_style_layout" "enum_articles_blocks_feature_list_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_blocks_feature_list_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_blocks_metrics_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "articles_blocks_metrics_items_locales" (
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_blocks_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_articles_blocks_metrics_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_articles_blocks_metrics_advanced_style_weight",
  	"advanced_style_tone" "enum_articles_blocks_metrics_advanced_style_tone",
  	"advanced_style_size" "enum_articles_blocks_metrics_advanced_style_size",
  	"advanced_style_align" "enum_articles_blocks_metrics_advanced_style_align",
  	"advanced_style_spacing" "enum_articles_blocks_metrics_advanced_style_spacing",
  	"advanced_style_layout" "enum_articles_blocks_metrics_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_blocks_metrics_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "enum_articles_blocks_callout_tone",
  	"style_preset" "enum_articles_blocks_callout_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_articles_blocks_callout_advanced_style_weight",
  	"advanced_style_tone" "enum_articles_blocks_callout_advanced_style_tone",
  	"advanced_style_size" "enum_articles_blocks_callout_advanced_style_size",
  	"advanced_style_align" "enum_articles_blocks_callout_advanced_style_align",
  	"advanced_style_spacing" "enum_articles_blocks_callout_advanced_style_spacing",
  	"advanced_style_layout" "enum_articles_blocks_callout_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_blocks_callout_locales" (
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_articles_blocks_quote_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_articles_blocks_quote_advanced_style_weight",
  	"advanced_style_tone" "enum_articles_blocks_quote_advanced_style_tone",
  	"advanced_style_size" "enum_articles_blocks_quote_advanced_style_size",
  	"advanced_style_align" "enum_articles_blocks_quote_advanced_style_align",
  	"advanced_style_spacing" "enum_articles_blocks_quote_advanced_style_spacing",
  	"advanced_style_layout" "enum_articles_blocks_quote_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_blocks_quote_locales" (
  	"content" jsonb,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"type" "enum_articles_blocks_cta_type" DEFAULT 'internal',
  	"style_preset" "enum_articles_blocks_cta_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum_articles_blocks_cta_advanced_style_weight",
  	"advanced_style_tone" "enum_articles_blocks_cta_advanced_style_tone",
  	"advanced_style_size" "enum_articles_blocks_cta_advanced_style_size",
  	"advanced_style_align" "enum_articles_blocks_cta_advanced_style_align",
  	"advanced_style_spacing" "enum_articles_blocks_cta_advanced_style_spacing",
  	"advanced_style_layout" "enum_articles_blocks_cta_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "articles_blocks_cta_locales" (
  	"title" varchar,
  	"description" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "articles_sections_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "articles_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "articles" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"status" "enum_articles_status" DEFAULT 'draft',
  	"published_at" timestamp(3) with time zone,
  	"cover_image_id" integer,
  	"destination_href" varchar,
  	"destination_type" "enum_articles_destination_type",
  	"seo_image_id" integer,
  	"seo_no_index" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_articles_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "articles_locales" (
  	"title" varchar,
  	"excerpt" varchar,
  	"cover_alt" varchar,
  	"destination_label" varchar,
  	"reading_time" varchar,
  	"perspective" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style_preset" "enum__articles_v_blocks_body_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__articles_v_blocks_body_advanced_style_weight",
  	"advanced_style_tone" "enum__articles_v_blocks_body_advanced_style_tone",
  	"advanced_style_size" "enum__articles_v_blocks_body_advanced_style_size",
  	"advanced_style_align" "enum__articles_v_blocks_body_advanced_style_align",
  	"advanced_style_spacing" "enum__articles_v_blocks_body_advanced_style_spacing",
  	"advanced_style_layout" "enum__articles_v_blocks_body_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_body_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"layout_preset" "enum__articles_v_blocks_media_layout_preset" DEFAULT 'inline',
  	"style_preset" "enum__articles_v_blocks_media_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__articles_v_blocks_media_advanced_style_weight",
  	"advanced_style_tone" "enum__articles_v_blocks_media_advanced_style_tone",
  	"advanced_style_size" "enum__articles_v_blocks_media_advanced_style_size",
  	"advanced_style_align" "enum__articles_v_blocks_media_advanced_style_align",
  	"advanced_style_spacing" "enum__articles_v_blocks_media_advanced_style_spacing",
  	"advanced_style_layout" "enum__articles_v_blocks_media_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_media_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_gallery_items_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout_preset" "enum__articles_v_blocks_gallery_layout_preset" DEFAULT 'inline',
  	"style_preset" "enum__articles_v_blocks_gallery_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__articles_v_blocks_gallery_advanced_style_weight",
  	"advanced_style_tone" "enum__articles_v_blocks_gallery_advanced_style_tone",
  	"advanced_style_size" "enum__articles_v_blocks_gallery_advanced_style_size",
  	"advanced_style_align" "enum__articles_v_blocks_gallery_advanced_style_align",
  	"advanced_style_spacing" "enum__articles_v_blocks_gallery_advanced_style_spacing",
  	"advanced_style_layout" "enum__articles_v_blocks_gallery_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_feature_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_feature_list_items_locales" (
  	"label" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style_preset" "enum__articles_v_blocks_feature_list_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__articles_v_blocks_feature_list_advanced_style_weight",
  	"advanced_style_tone" "enum__articles_v_blocks_feature_list_advanced_style_tone",
  	"advanced_style_size" "enum__articles_v_blocks_feature_list_advanced_style_size",
  	"advanced_style_align" "enum__articles_v_blocks_feature_list_advanced_style_align",
  	"advanced_style_spacing" "enum__articles_v_blocks_feature_list_advanced_style_spacing",
  	"advanced_style_layout" "enum__articles_v_blocks_feature_list_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_feature_list_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_metrics_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_metrics_items_locales" (
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style_preset" "enum__articles_v_blocks_metrics_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__articles_v_blocks_metrics_advanced_style_weight",
  	"advanced_style_tone" "enum__articles_v_blocks_metrics_advanced_style_tone",
  	"advanced_style_size" "enum__articles_v_blocks_metrics_advanced_style_size",
  	"advanced_style_align" "enum__articles_v_blocks_metrics_advanced_style_align",
  	"advanced_style_spacing" "enum__articles_v_blocks_metrics_advanced_style_spacing",
  	"advanced_style_layout" "enum__articles_v_blocks_metrics_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_metrics_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tone" "enum__articles_v_blocks_callout_tone",
  	"style_preset" "enum__articles_v_blocks_callout_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__articles_v_blocks_callout_advanced_style_weight",
  	"advanced_style_tone" "enum__articles_v_blocks_callout_advanced_style_tone",
  	"advanced_style_size" "enum__articles_v_blocks_callout_advanced_style_size",
  	"advanced_style_align" "enum__articles_v_blocks_callout_advanced_style_align",
  	"advanced_style_spacing" "enum__articles_v_blocks_callout_advanced_style_spacing",
  	"advanced_style_layout" "enum__articles_v_blocks_callout_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_callout_locales" (
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style_preset" "enum__articles_v_blocks_quote_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__articles_v_blocks_quote_advanced_style_weight",
  	"advanced_style_tone" "enum__articles_v_blocks_quote_advanced_style_tone",
  	"advanced_style_size" "enum__articles_v_blocks_quote_advanced_style_size",
  	"advanced_style_align" "enum__articles_v_blocks_quote_advanced_style_align",
  	"advanced_style_spacing" "enum__articles_v_blocks_quote_advanced_style_spacing",
  	"advanced_style_layout" "enum__articles_v_blocks_quote_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_quote_locales" (
  	"content" jsonb,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"type" "enum__articles_v_blocks_cta_type" DEFAULT 'internal',
  	"style_preset" "enum__articles_v_blocks_cta_style_preset" DEFAULT 'default',
  	"advanced_style_weight" "enum__articles_v_blocks_cta_advanced_style_weight",
  	"advanced_style_tone" "enum__articles_v_blocks_cta_advanced_style_tone",
  	"advanced_style_size" "enum__articles_v_blocks_cta_advanced_style_size",
  	"advanced_style_align" "enum__articles_v_blocks_cta_advanced_style_align",
  	"advanced_style_spacing" "enum__articles_v_blocks_cta_advanced_style_spacing",
  	"advanced_style_layout" "enum__articles_v_blocks_cta_advanced_style_layout",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_articles_v_blocks_cta_locales" (
  	"title" varchar,
  	"description" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_articles_v_version_sections_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_articles_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_articles_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_status" "enum__articles_v_version_status" DEFAULT 'draft',
  	"version_published_at" timestamp(3) with time zone,
  	"version_cover_image_id" integer,
  	"version_destination_href" varchar,
  	"version_destination_type" "enum__articles_v_version_destination_type",
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__articles_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__articles_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_articles_v_locales" (
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"version_cover_alt" varchar,
  	"version_destination_label" varchar,
  	"version_reading_time" varchar,
  	"version_perspective" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_pages_blocks_body_style_preset" DEFAULT 'default' NOT NULL,
  	"advanced_style_weight" "enum_pages_blocks_body_advanced_style_weight",
  	"advanced_style_tone" "enum_pages_blocks_body_advanced_style_tone",
  	"advanced_style_size" "enum_pages_blocks_body_advanced_style_size",
  	"advanced_style_align" "enum_pages_blocks_body_advanced_style_align",
  	"advanced_style_spacing" "enum_pages_blocks_body_advanced_style_spacing",
  	"advanced_style_layout" "enum_pages_blocks_body_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_body_locales" (
  	"content" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"layout_preset" "enum_pages_blocks_media_layout_preset" DEFAULT 'inline' NOT NULL,
  	"style_preset" "enum_pages_blocks_media_style_preset" DEFAULT 'default' NOT NULL,
  	"advanced_style_weight" "enum_pages_blocks_media_advanced_style_weight",
  	"advanced_style_tone" "enum_pages_blocks_media_advanced_style_tone",
  	"advanced_style_size" "enum_pages_blocks_media_advanced_style_size",
  	"advanced_style_align" "enum_pages_blocks_media_advanced_style_align",
  	"advanced_style_spacing" "enum_pages_blocks_media_advanced_style_spacing",
  	"advanced_style_layout" "enum_pages_blocks_media_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_locales" (
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery_items_locales" (
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout_preset" "enum_pages_blocks_gallery_layout_preset" DEFAULT 'inline' NOT NULL,
  	"style_preset" "enum_pages_blocks_gallery_style_preset" DEFAULT 'default' NOT NULL,
  	"advanced_style_weight" "enum_pages_blocks_gallery_advanced_style_weight",
  	"advanced_style_tone" "enum_pages_blocks_gallery_advanced_style_tone",
  	"advanced_style_size" "enum_pages_blocks_gallery_advanced_style_size",
  	"advanced_style_align" "enum_pages_blocks_gallery_advanced_style_align",
  	"advanced_style_spacing" "enum_pages_blocks_gallery_advanced_style_spacing",
  	"advanced_style_layout" "enum_pages_blocks_gallery_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_list_items_locales" (
  	"label" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_pages_blocks_feature_list_style_preset" DEFAULT 'default' NOT NULL,
  	"advanced_style_weight" "enum_pages_blocks_feature_list_advanced_style_weight",
  	"advanced_style_tone" "enum_pages_blocks_feature_list_advanced_style_tone",
  	"advanced_style_size" "enum_pages_blocks_feature_list_advanced_style_size",
  	"advanced_style_align" "enum_pages_blocks_feature_list_advanced_style_align",
  	"advanced_style_spacing" "enum_pages_blocks_feature_list_advanced_style_spacing",
  	"advanced_style_layout" "enum_pages_blocks_feature_list_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_list_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_metrics_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_metrics_items_locales" (
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_pages_blocks_metrics_style_preset" DEFAULT 'default' NOT NULL,
  	"advanced_style_weight" "enum_pages_blocks_metrics_advanced_style_weight",
  	"advanced_style_tone" "enum_pages_blocks_metrics_advanced_style_tone",
  	"advanced_style_size" "enum_pages_blocks_metrics_advanced_style_size",
  	"advanced_style_align" "enum_pages_blocks_metrics_advanced_style_align",
  	"advanced_style_spacing" "enum_pages_blocks_metrics_advanced_style_spacing",
  	"advanced_style_layout" "enum_pages_blocks_metrics_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_metrics_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_callout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "enum_pages_blocks_callout_tone",
  	"style_preset" "enum_pages_blocks_callout_style_preset" DEFAULT 'default' NOT NULL,
  	"advanced_style_weight" "enum_pages_blocks_callout_advanced_style_weight",
  	"advanced_style_tone" "enum_pages_blocks_callout_advanced_style_tone",
  	"advanced_style_size" "enum_pages_blocks_callout_advanced_style_size",
  	"advanced_style_align" "enum_pages_blocks_callout_advanced_style_align",
  	"advanced_style_spacing" "enum_pages_blocks_callout_advanced_style_spacing",
  	"advanced_style_layout" "enum_pages_blocks_callout_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_callout_locales" (
  	"title" varchar,
  	"content" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style_preset" "enum_pages_blocks_quote_style_preset" DEFAULT 'default' NOT NULL,
  	"advanced_style_weight" "enum_pages_blocks_quote_advanced_style_weight",
  	"advanced_style_tone" "enum_pages_blocks_quote_advanced_style_tone",
  	"advanced_style_size" "enum_pages_blocks_quote_advanced_style_size",
  	"advanced_style_align" "enum_pages_blocks_quote_advanced_style_align",
  	"advanced_style_spacing" "enum_pages_blocks_quote_advanced_style_spacing",
  	"advanced_style_layout" "enum_pages_blocks_quote_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_quote_locales" (
  	"content" jsonb NOT NULL,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL,
  	"type" "enum_pages_blocks_cta_type" DEFAULT 'internal' NOT NULL,
  	"style_preset" "enum_pages_blocks_cta_style_preset" DEFAULT 'default' NOT NULL,
  	"advanced_style_weight" "enum_pages_blocks_cta_advanced_style_weight",
  	"advanced_style_tone" "enum_pages_blocks_cta_advanced_style_tone",
  	"advanced_style_size" "enum_pages_blocks_cta_advanced_style_size",
  	"advanced_style_align" "enum_pages_blocks_cta_advanced_style_align",
  	"advanced_style_spacing" "enum_pages_blocks_cta_advanced_style_spacing",
  	"advanced_style_layout" "enum_pages_blocks_cta_advanced_style_layout",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_sections_locales" (
  	"eyebrow" varchar NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" "enum_pages_slug" NOT NULL,
  	"status" "enum_pages_status" DEFAULT 'draft' NOT NULL,
  	"seo_image_id" integer,
  	"seo_no_index" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar NOT NULL,
  	"summary" varchar NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_folders_id" integer,
  	"media_id" integer,
  	"projects_id" integer,
  	"articles_id" integer,
  	"pages_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_titles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "site" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"brand" varchar NOT NULL,
  	"default_locale" "enum_site_default_locale" DEFAULT 'es' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "navigation_items_active_paths" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"path" varchar NOT NULL
  );
  
  CREATE TABLE "navigation_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"to" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "navigation_locales" (
  	"language_toggle_to_english" varchar NOT NULL,
  	"language_toggle_to_spanish" varchar NOT NULL,
  	"theme_toggle_to_light" varchar NOT NULL,
  	"theme_toggle_to_dark" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_locales" (
  	"copyright" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" "enum_social_links_key" NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"aria_label" varchar NOT NULL,
  	"cursor_icon" "enum_social_links_cursor_icon" NOT NULL
  );
  
  CREATE TABLE "social" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "seo_defaults" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "seo_defaults_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "page_seo_copy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "page_seo_copy_locales" (
  	"work_title" varchar NOT NULL,
  	"work_description" varchar NOT NULL,
  	"blog_title" varchar NOT NULL,
  	"blog_description" varchar NOT NULL,
  	"about_title" varchar NOT NULL,
  	"about_description" varchar NOT NULL,
  	"resume_title" varchar NOT NULL,
  	"resume_description" varchar NOT NULL,
  	"not_found_title" varchar NOT NULL,
  	"not_found_description" varchar NOT NULL,
  	"project_not_found_title" varchar NOT NULL,
  	"project_not_found_description" varchar NOT NULL,
  	"article_not_found_title" varchar NOT NULL,
  	"article_not_found_description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "notifications_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "notifications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "cursor_copy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "cursor_copy_locales" (
  	"view_case_study" varchar NOT NULL,
  	"visit_website" varchar NOT NULL,
  	"read_case" varchar NOT NULL,
  	"open_note" varchar NOT NULL,
  	"read_article" varchar NOT NULL,
  	"open_linkedin" varchar NOT NULL,
  	"send_email" varchar NOT NULL,
  	"view_github" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "experience_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"role" varchar NOT NULL
  );
  
  CREATE TABLE "experience" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "work_page_copy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "work_page_copy_locales" (
  	"hero_title" varchar NOT NULL,
  	"greeting" varchar NOT NULL,
  	"empty_projects_title" varchar NOT NULL,
  	"empty_projects_description" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "blog_page_copy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "blog_page_copy_locales" (
  	"heading" varchar NOT NULL,
  	"empty_title" varchar NOT NULL,
  	"empty_description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "about_page_copy_intro_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_page_copy_intro_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_page_copy_intro_contact_line_links" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_about_page_copy_intro_contact_line_links",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "about_page_copy_gallery_sections_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"alt" varchar NOT NULL,
  	"cursor_text" varchar NOT NULL,
  	"cursor_icon" "enum_about_page_copy_gallery_sections_images_cursor_icon"
  );
  
  CREATE TABLE "about_page_copy_gallery_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "about_page_copy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_page_copy_locales" (
  	"heading" varchar NOT NULL,
  	"hero_title" varchar NOT NULL,
  	"hero_subtitle" varchar NOT NULL,
  	"intro_contact_line_prefix" varchar NOT NULL,
  	"intro_contact_line_suffix" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "resume_page_copy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "resume_page_copy_locales" (
  	"name" varchar NOT NULL,
  	"heading" varchar NOT NULL,
  	"download" varchar NOT NULL,
  	"open" varchar NOT NULL,
  	"checking" varchar NOT NULL,
  	"viewer_fallback" varchar NOT NULL,
  	"pending_label" varchar NOT NULL,
  	"pending_hint" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "error_page_copy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"generic_code" varchar NOT NULL,
  	"generic_action_href" varchar NOT NULL,
  	"forbidden_code" varchar NOT NULL,
  	"forbidden_action_href" varchar NOT NULL,
  	"not_found_code" varchar NOT NULL,
  	"not_found_action_href" varchar NOT NULL,
  	"content_code" varchar NOT NULL,
  	"content_action_href" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "error_page_copy_locales" (
  	"generic_title" varchar NOT NULL,
  	"generic_description" varchar NOT NULL,
  	"generic_action_label" varchar NOT NULL,
  	"forbidden_title" varchar NOT NULL,
  	"forbidden_description" varchar NOT NULL,
  	"forbidden_action_label" varchar NOT NULL,
  	"not_found_title" varchar NOT NULL,
  	"not_found_description" varchar NOT NULL,
  	"not_found_action_label" varchar NOT NULL,
  	"content_title" varchar NOT NULL,
  	"content_description" varchar NOT NULL,
  	"content_action_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_tags" ADD CONSTRAINT "media_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media" ADD CONSTRAINT "media_folder_id_media_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."media_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_body" ADD CONSTRAINT "projects_blocks_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_body_locales" ADD CONSTRAINT "projects_blocks_body_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_body"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_media" ADD CONSTRAINT "projects_blocks_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_media" ADD CONSTRAINT "projects_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_media_locales" ADD CONSTRAINT "projects_blocks_media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_gallery_items" ADD CONSTRAINT "projects_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_gallery_items" ADD CONSTRAINT "projects_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_gallery_items_locales" ADD CONSTRAINT "projects_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_gallery" ADD CONSTRAINT "projects_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_feature_list_items" ADD CONSTRAINT "projects_blocks_feature_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_feature_list_items_locales" ADD CONSTRAINT "projects_blocks_feature_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_feature_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_feature_list" ADD CONSTRAINT "projects_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_feature_list_locales" ADD CONSTRAINT "projects_blocks_feature_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_metrics_items" ADD CONSTRAINT "projects_blocks_metrics_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_metrics_items_locales" ADD CONSTRAINT "projects_blocks_metrics_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_metrics_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_metrics" ADD CONSTRAINT "projects_blocks_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_metrics_locales" ADD CONSTRAINT "projects_blocks_metrics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_callout" ADD CONSTRAINT "projects_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_callout_locales" ADD CONSTRAINT "projects_blocks_callout_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_callout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_quote" ADD CONSTRAINT "projects_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_quote_locales" ADD CONSTRAINT "projects_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_cta" ADD CONSTRAINT "projects_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_cta_locales" ADD CONSTRAINT "projects_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_sections" ADD CONSTRAINT "projects_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_sections_locales" ADD CONSTRAINT "projects_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_tags" ADD CONSTRAINT "projects_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_meta" ADD CONSTRAINT "projects_meta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_locales" ADD CONSTRAINT "projects_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_body" ADD CONSTRAINT "_projects_v_blocks_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_body_locales" ADD CONSTRAINT "_projects_v_blocks_body_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_body"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_media" ADD CONSTRAINT "_projects_v_blocks_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_media" ADD CONSTRAINT "_projects_v_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_media_locales" ADD CONSTRAINT "_projects_v_blocks_media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_gallery_items" ADD CONSTRAINT "_projects_v_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_gallery_items" ADD CONSTRAINT "_projects_v_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_gallery_items_locales" ADD CONSTRAINT "_projects_v_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_gallery" ADD CONSTRAINT "_projects_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_feature_list_items" ADD CONSTRAINT "_projects_v_blocks_feature_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_feature_list_items_locales" ADD CONSTRAINT "_projects_v_blocks_feature_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_feature_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_feature_list" ADD CONSTRAINT "_projects_v_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_feature_list_locales" ADD CONSTRAINT "_projects_v_blocks_feature_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_metrics_items" ADD CONSTRAINT "_projects_v_blocks_metrics_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_metrics_items_locales" ADD CONSTRAINT "_projects_v_blocks_metrics_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_metrics_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_metrics" ADD CONSTRAINT "_projects_v_blocks_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_metrics_locales" ADD CONSTRAINT "_projects_v_blocks_metrics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_callout" ADD CONSTRAINT "_projects_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_callout_locales" ADD CONSTRAINT "_projects_v_blocks_callout_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_callout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_quote" ADD CONSTRAINT "_projects_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_quote_locales" ADD CONSTRAINT "_projects_v_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_cta" ADD CONSTRAINT "_projects_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_cta_locales" ADD CONSTRAINT "_projects_v_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_sections" ADD CONSTRAINT "_projects_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_sections_locales" ADD CONSTRAINT "_projects_v_version_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v_version_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_tags" ADD CONSTRAINT "_projects_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_meta" ADD CONSTRAINT "_projects_v_version_meta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_locales" ADD CONSTRAINT "_projects_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_body" ADD CONSTRAINT "articles_blocks_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_body_locales" ADD CONSTRAINT "articles_blocks_body_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_body"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_media" ADD CONSTRAINT "articles_blocks_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_blocks_media" ADD CONSTRAINT "articles_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_media_locales" ADD CONSTRAINT "articles_blocks_media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_gallery_items" ADD CONSTRAINT "articles_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_blocks_gallery_items" ADD CONSTRAINT "articles_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_gallery_items_locales" ADD CONSTRAINT "articles_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_gallery" ADD CONSTRAINT "articles_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_feature_list_items" ADD CONSTRAINT "articles_blocks_feature_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_feature_list_items_locales" ADD CONSTRAINT "articles_blocks_feature_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_feature_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_feature_list" ADD CONSTRAINT "articles_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_feature_list_locales" ADD CONSTRAINT "articles_blocks_feature_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_metrics_items" ADD CONSTRAINT "articles_blocks_metrics_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_metrics_items_locales" ADD CONSTRAINT "articles_blocks_metrics_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_metrics_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_metrics" ADD CONSTRAINT "articles_blocks_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_metrics_locales" ADD CONSTRAINT "articles_blocks_metrics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_callout" ADD CONSTRAINT "articles_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_callout_locales" ADD CONSTRAINT "articles_blocks_callout_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_callout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_quote" ADD CONSTRAINT "articles_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_quote_locales" ADD CONSTRAINT "articles_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_cta" ADD CONSTRAINT "articles_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_cta_locales" ADD CONSTRAINT "articles_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_sections" ADD CONSTRAINT "articles_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_sections_locales" ADD CONSTRAINT "articles_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_tags" ADD CONSTRAINT "articles_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles" ADD CONSTRAINT "articles_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles" ADD CONSTRAINT "articles_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_locales" ADD CONSTRAINT "articles_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_body" ADD CONSTRAINT "_articles_v_blocks_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_body_locales" ADD CONSTRAINT "_articles_v_blocks_body_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_body"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_media" ADD CONSTRAINT "_articles_v_blocks_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_media" ADD CONSTRAINT "_articles_v_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_media_locales" ADD CONSTRAINT "_articles_v_blocks_media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_gallery_items" ADD CONSTRAINT "_articles_v_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_gallery_items" ADD CONSTRAINT "_articles_v_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_gallery_items_locales" ADD CONSTRAINT "_articles_v_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_gallery" ADD CONSTRAINT "_articles_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_feature_list_items" ADD CONSTRAINT "_articles_v_blocks_feature_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_feature_list_items_locales" ADD CONSTRAINT "_articles_v_blocks_feature_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_feature_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_feature_list" ADD CONSTRAINT "_articles_v_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_feature_list_locales" ADD CONSTRAINT "_articles_v_blocks_feature_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_metrics_items" ADD CONSTRAINT "_articles_v_blocks_metrics_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_metrics_items_locales" ADD CONSTRAINT "_articles_v_blocks_metrics_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_metrics_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_metrics" ADD CONSTRAINT "_articles_v_blocks_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_metrics_locales" ADD CONSTRAINT "_articles_v_blocks_metrics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_callout" ADD CONSTRAINT "_articles_v_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_callout_locales" ADD CONSTRAINT "_articles_v_blocks_callout_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_callout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_quote" ADD CONSTRAINT "_articles_v_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_quote_locales" ADD CONSTRAINT "_articles_v_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_cta" ADD CONSTRAINT "_articles_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_blocks_cta_locales" ADD CONSTRAINT "_articles_v_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_version_sections" ADD CONSTRAINT "_articles_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_version_sections_locales" ADD CONSTRAINT "_articles_v_version_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v_version_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v_version_tags" ADD CONSTRAINT "_articles_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_parent_id_articles_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_articles_v_locales" ADD CONSTRAINT "_articles_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_body" ADD CONSTRAINT "pages_blocks_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_body_locales" ADD CONSTRAINT "pages_blocks_body_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_body"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media" ADD CONSTRAINT "pages_blocks_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media" ADD CONSTRAINT "pages_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_locales" ADD CONSTRAINT "pages_blocks_media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_items" ADD CONSTRAINT "pages_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_items" ADD CONSTRAINT "pages_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_items_locales" ADD CONSTRAINT "pages_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_list_items" ADD CONSTRAINT "pages_blocks_feature_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_list_items_locales" ADD CONSTRAINT "pages_blocks_feature_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_list" ADD CONSTRAINT "pages_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_list_locales" ADD CONSTRAINT "pages_blocks_feature_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_metrics_items" ADD CONSTRAINT "pages_blocks_metrics_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_metrics_items_locales" ADD CONSTRAINT "pages_blocks_metrics_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_metrics_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_metrics" ADD CONSTRAINT "pages_blocks_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_metrics_locales" ADD CONSTRAINT "pages_blocks_metrics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_callout" ADD CONSTRAINT "pages_blocks_callout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_callout_locales" ADD CONSTRAINT "pages_blocks_callout_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_callout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quote" ADD CONSTRAINT "pages_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quote_locales" ADD CONSTRAINT "pages_blocks_quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_locales" ADD CONSTRAINT "pages_blocks_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_sections" ADD CONSTRAINT "pages_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_sections_locales" ADD CONSTRAINT "pages_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_folders_fk" FOREIGN KEY ("media_folders_id") REFERENCES "public"."media_folders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_titles" ADD CONSTRAINT "site_titles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_items_active_paths" ADD CONSTRAINT "navigation_items_active_paths_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_items" ADD CONSTRAINT "navigation_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_locales" ADD CONSTRAINT "navigation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "social_links" ADD CONSTRAINT "social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."social"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo_defaults" ADD CONSTRAINT "seo_defaults_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_defaults_locales" ADD CONSTRAINT "seo_defaults_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."seo_defaults"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_seo_copy_locales" ADD CONSTRAINT "page_seo_copy_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page_seo_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "notifications_items" ADD CONSTRAINT "notifications_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."notifications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cursor_copy_locales" ADD CONSTRAINT "cursor_copy_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cursor_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_items" ADD CONSTRAINT "experience_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "work_page_copy_locales" ADD CONSTRAINT "work_page_copy_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work_page_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_page_copy_locales" ADD CONSTRAINT "blog_page_copy_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_page_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_copy_intro_paragraphs" ADD CONSTRAINT "about_page_copy_intro_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_copy_intro_bullets" ADD CONSTRAINT "about_page_copy_intro_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_copy_intro_contact_line_links" ADD CONSTRAINT "about_page_copy_intro_contact_line_links_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."about_page_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_copy_gallery_sections_images" ADD CONSTRAINT "about_page_copy_gallery_sections_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page_copy_gallery_sections_images" ADD CONSTRAINT "about_page_copy_gallery_sections_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page_copy_gallery_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_copy_gallery_sections" ADD CONSTRAINT "about_page_copy_gallery_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_copy_locales" ADD CONSTRAINT "about_page_copy_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resume_page_copy_locales" ADD CONSTRAINT "resume_page_copy_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resume_page_copy"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "error_page_copy_locales" ADD CONSTRAINT "error_page_copy_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."error_page_copy"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "media_folders_slug_idx" ON "media_folders" USING btree ("slug");
  CREATE INDEX "media_folders_updated_at_idx" ON "media_folders" USING btree ("updated_at");
  CREATE INDEX "media_folders_created_at_idx" ON "media_folders" USING btree ("created_at");
  CREATE INDEX "media_tags_order_idx" ON "media_tags" USING btree ("_order");
  CREATE INDEX "media_tags_parent_id_idx" ON "media_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "media_asset_key_idx" ON "media" USING btree ("asset_key");
  CREATE INDEX "media_folder_idx" ON "media" USING btree ("folder_id");
  CREATE INDEX "media_usage_idx" ON "media" USING btree ("usage");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_body_order_idx" ON "projects_blocks_body" USING btree ("_order");
  CREATE INDEX "projects_blocks_body_parent_id_idx" ON "projects_blocks_body" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_body_path_idx" ON "projects_blocks_body" USING btree ("_path");
  CREATE UNIQUE INDEX "projects_blocks_body_locales_locale_parent_id_unique" ON "projects_blocks_body_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_media_order_idx" ON "projects_blocks_media" USING btree ("_order");
  CREATE INDEX "projects_blocks_media_parent_id_idx" ON "projects_blocks_media" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_media_path_idx" ON "projects_blocks_media" USING btree ("_path");
  CREATE INDEX "projects_blocks_media_image_idx" ON "projects_blocks_media" USING btree ("image_id");
  CREATE UNIQUE INDEX "projects_blocks_media_locales_locale_parent_id_unique" ON "projects_blocks_media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_gallery_items_order_idx" ON "projects_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "projects_blocks_gallery_items_parent_id_idx" ON "projects_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_gallery_items_image_idx" ON "projects_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "projects_blocks_gallery_items_locales_locale_parent_id_uniqu" ON "projects_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_gallery_order_idx" ON "projects_blocks_gallery" USING btree ("_order");
  CREATE INDEX "projects_blocks_gallery_parent_id_idx" ON "projects_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_gallery_path_idx" ON "projects_blocks_gallery" USING btree ("_path");
  CREATE INDEX "projects_blocks_feature_list_items_order_idx" ON "projects_blocks_feature_list_items" USING btree ("_order");
  CREATE INDEX "projects_blocks_feature_list_items_parent_id_idx" ON "projects_blocks_feature_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "projects_blocks_feature_list_items_locales_locale_parent_id_" ON "projects_blocks_feature_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_feature_list_order_idx" ON "projects_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "projects_blocks_feature_list_parent_id_idx" ON "projects_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_feature_list_path_idx" ON "projects_blocks_feature_list" USING btree ("_path");
  CREATE UNIQUE INDEX "projects_blocks_feature_list_locales_locale_parent_id_unique" ON "projects_blocks_feature_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_metrics_items_order_idx" ON "projects_blocks_metrics_items" USING btree ("_order");
  CREATE INDEX "projects_blocks_metrics_items_parent_id_idx" ON "projects_blocks_metrics_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "projects_blocks_metrics_items_locales_locale_parent_id_uniqu" ON "projects_blocks_metrics_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_metrics_order_idx" ON "projects_blocks_metrics" USING btree ("_order");
  CREATE INDEX "projects_blocks_metrics_parent_id_idx" ON "projects_blocks_metrics" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_metrics_path_idx" ON "projects_blocks_metrics" USING btree ("_path");
  CREATE UNIQUE INDEX "projects_blocks_metrics_locales_locale_parent_id_unique" ON "projects_blocks_metrics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_callout_order_idx" ON "projects_blocks_callout" USING btree ("_order");
  CREATE INDEX "projects_blocks_callout_parent_id_idx" ON "projects_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_callout_path_idx" ON "projects_blocks_callout" USING btree ("_path");
  CREATE UNIQUE INDEX "projects_blocks_callout_locales_locale_parent_id_unique" ON "projects_blocks_callout_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_quote_order_idx" ON "projects_blocks_quote" USING btree ("_order");
  CREATE INDEX "projects_blocks_quote_parent_id_idx" ON "projects_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_quote_path_idx" ON "projects_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "projects_blocks_quote_locales_locale_parent_id_unique" ON "projects_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_blocks_cta_order_idx" ON "projects_blocks_cta" USING btree ("_order");
  CREATE INDEX "projects_blocks_cta_parent_id_idx" ON "projects_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_cta_path_idx" ON "projects_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "projects_blocks_cta_locales_locale_parent_id_unique" ON "projects_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_sections_order_idx" ON "projects_sections" USING btree ("_order");
  CREATE INDEX "projects_sections_parent_id_idx" ON "projects_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "projects_sections_locales_locale_parent_id_unique" ON "projects_sections_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_tags_order_idx" ON "projects_tags" USING btree ("_order");
  CREATE INDEX "projects_tags_parent_id_idx" ON "projects_tags" USING btree ("_parent_id");
  CREATE INDEX "projects_meta_order_idx" ON "projects_meta" USING btree ("_order");
  CREATE INDEX "projects_meta_parent_id_idx" ON "projects_meta" USING btree ("_parent_id");
  CREATE INDEX "projects_meta_locale_idx" ON "projects_meta" USING btree ("_locale");
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_status_idx" ON "projects" USING btree ("status");
  CREATE INDEX "projects_published_at_idx" ON "projects" USING btree ("published_at");
  CREATE INDEX "projects_featured_idx" ON "projects" USING btree ("featured");
  CREATE INDEX "projects_cover_image_idx" ON "projects" USING btree ("cover_image_id");
  CREATE INDEX "projects_seo_seo_image_idx" ON "projects" USING btree ("seo_image_id");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE UNIQUE INDEX "projects_locales_locale_parent_id_unique" ON "projects_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_body_order_idx" ON "_projects_v_blocks_body" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_body_parent_id_idx" ON "_projects_v_blocks_body" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_body_path_idx" ON "_projects_v_blocks_body" USING btree ("_path");
  CREATE UNIQUE INDEX "_projects_v_blocks_body_locales_locale_parent_id_unique" ON "_projects_v_blocks_body_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_media_order_idx" ON "_projects_v_blocks_media" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_media_parent_id_idx" ON "_projects_v_blocks_media" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_media_path_idx" ON "_projects_v_blocks_media" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_media_image_idx" ON "_projects_v_blocks_media" USING btree ("image_id");
  CREATE UNIQUE INDEX "_projects_v_blocks_media_locales_locale_parent_id_unique" ON "_projects_v_blocks_media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_gallery_items_order_idx" ON "_projects_v_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_gallery_items_parent_id_idx" ON "_projects_v_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_gallery_items_image_idx" ON "_projects_v_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_projects_v_blocks_gallery_items_locales_locale_parent_id_un" ON "_projects_v_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_gallery_order_idx" ON "_projects_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_gallery_parent_id_idx" ON "_projects_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_gallery_path_idx" ON "_projects_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_feature_list_items_order_idx" ON "_projects_v_blocks_feature_list_items" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_feature_list_items_parent_id_idx" ON "_projects_v_blocks_feature_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_projects_v_blocks_feature_list_items_locales_locale_parent_" ON "_projects_v_blocks_feature_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_feature_list_order_idx" ON "_projects_v_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_feature_list_parent_id_idx" ON "_projects_v_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_feature_list_path_idx" ON "_projects_v_blocks_feature_list" USING btree ("_path");
  CREATE UNIQUE INDEX "_projects_v_blocks_feature_list_locales_locale_parent_id_uni" ON "_projects_v_blocks_feature_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_metrics_items_order_idx" ON "_projects_v_blocks_metrics_items" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_metrics_items_parent_id_idx" ON "_projects_v_blocks_metrics_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_projects_v_blocks_metrics_items_locales_locale_parent_id_un" ON "_projects_v_blocks_metrics_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_metrics_order_idx" ON "_projects_v_blocks_metrics" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_metrics_parent_id_idx" ON "_projects_v_blocks_metrics" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_metrics_path_idx" ON "_projects_v_blocks_metrics" USING btree ("_path");
  CREATE UNIQUE INDEX "_projects_v_blocks_metrics_locales_locale_parent_id_unique" ON "_projects_v_blocks_metrics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_callout_order_idx" ON "_projects_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_callout_parent_id_idx" ON "_projects_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_callout_path_idx" ON "_projects_v_blocks_callout" USING btree ("_path");
  CREATE UNIQUE INDEX "_projects_v_blocks_callout_locales_locale_parent_id_unique" ON "_projects_v_blocks_callout_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_quote_order_idx" ON "_projects_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_quote_parent_id_idx" ON "_projects_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_quote_path_idx" ON "_projects_v_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "_projects_v_blocks_quote_locales_locale_parent_id_unique" ON "_projects_v_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_blocks_cta_order_idx" ON "_projects_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_cta_parent_id_idx" ON "_projects_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_cta_path_idx" ON "_projects_v_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "_projects_v_blocks_cta_locales_locale_parent_id_unique" ON "_projects_v_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_version_sections_order_idx" ON "_projects_v_version_sections" USING btree ("_order");
  CREATE INDEX "_projects_v_version_sections_parent_id_idx" ON "_projects_v_version_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_projects_v_version_sections_locales_locale_parent_id_unique" ON "_projects_v_version_sections_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_version_tags_order_idx" ON "_projects_v_version_tags" USING btree ("_order");
  CREATE INDEX "_projects_v_version_tags_parent_id_idx" ON "_projects_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_meta_order_idx" ON "_projects_v_version_meta" USING btree ("_order");
  CREATE INDEX "_projects_v_version_meta_parent_id_idx" ON "_projects_v_version_meta" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_meta_locale_idx" ON "_projects_v_version_meta" USING btree ("_locale");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX "_projects_v_version_version_status_idx" ON "_projects_v" USING btree ("version_status");
  CREATE INDEX "_projects_v_version_version_published_at_idx" ON "_projects_v" USING btree ("version_published_at");
  CREATE INDEX "_projects_v_version_version_featured_idx" ON "_projects_v" USING btree ("version_featured");
  CREATE INDEX "_projects_v_version_version_cover_image_idx" ON "_projects_v" USING btree ("version_cover_image_id");
  CREATE INDEX "_projects_v_version_seo_version_seo_image_idx" ON "_projects_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_snapshot_idx" ON "_projects_v" USING btree ("snapshot");
  CREATE INDEX "_projects_v_published_locale_idx" ON "_projects_v" USING btree ("published_locale");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_projects_v_locales_locale_parent_id_unique" ON "_projects_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_body_order_idx" ON "articles_blocks_body" USING btree ("_order");
  CREATE INDEX "articles_blocks_body_parent_id_idx" ON "articles_blocks_body" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_body_path_idx" ON "articles_blocks_body" USING btree ("_path");
  CREATE UNIQUE INDEX "articles_blocks_body_locales_locale_parent_id_unique" ON "articles_blocks_body_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_media_order_idx" ON "articles_blocks_media" USING btree ("_order");
  CREATE INDEX "articles_blocks_media_parent_id_idx" ON "articles_blocks_media" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_media_path_idx" ON "articles_blocks_media" USING btree ("_path");
  CREATE INDEX "articles_blocks_media_image_idx" ON "articles_blocks_media" USING btree ("image_id");
  CREATE UNIQUE INDEX "articles_blocks_media_locales_locale_parent_id_unique" ON "articles_blocks_media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_gallery_items_order_idx" ON "articles_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "articles_blocks_gallery_items_parent_id_idx" ON "articles_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_gallery_items_image_idx" ON "articles_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "articles_blocks_gallery_items_locales_locale_parent_id_uniqu" ON "articles_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_gallery_order_idx" ON "articles_blocks_gallery" USING btree ("_order");
  CREATE INDEX "articles_blocks_gallery_parent_id_idx" ON "articles_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_gallery_path_idx" ON "articles_blocks_gallery" USING btree ("_path");
  CREATE INDEX "articles_blocks_feature_list_items_order_idx" ON "articles_blocks_feature_list_items" USING btree ("_order");
  CREATE INDEX "articles_blocks_feature_list_items_parent_id_idx" ON "articles_blocks_feature_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "articles_blocks_feature_list_items_locales_locale_parent_id_" ON "articles_blocks_feature_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_feature_list_order_idx" ON "articles_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "articles_blocks_feature_list_parent_id_idx" ON "articles_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_feature_list_path_idx" ON "articles_blocks_feature_list" USING btree ("_path");
  CREATE UNIQUE INDEX "articles_blocks_feature_list_locales_locale_parent_id_unique" ON "articles_blocks_feature_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_metrics_items_order_idx" ON "articles_blocks_metrics_items" USING btree ("_order");
  CREATE INDEX "articles_blocks_metrics_items_parent_id_idx" ON "articles_blocks_metrics_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "articles_blocks_metrics_items_locales_locale_parent_id_uniqu" ON "articles_blocks_metrics_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_metrics_order_idx" ON "articles_blocks_metrics" USING btree ("_order");
  CREATE INDEX "articles_blocks_metrics_parent_id_idx" ON "articles_blocks_metrics" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_metrics_path_idx" ON "articles_blocks_metrics" USING btree ("_path");
  CREATE UNIQUE INDEX "articles_blocks_metrics_locales_locale_parent_id_unique" ON "articles_blocks_metrics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_callout_order_idx" ON "articles_blocks_callout" USING btree ("_order");
  CREATE INDEX "articles_blocks_callout_parent_id_idx" ON "articles_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_callout_path_idx" ON "articles_blocks_callout" USING btree ("_path");
  CREATE UNIQUE INDEX "articles_blocks_callout_locales_locale_parent_id_unique" ON "articles_blocks_callout_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_quote_order_idx" ON "articles_blocks_quote" USING btree ("_order");
  CREATE INDEX "articles_blocks_quote_parent_id_idx" ON "articles_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_quote_path_idx" ON "articles_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "articles_blocks_quote_locales_locale_parent_id_unique" ON "articles_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_blocks_cta_order_idx" ON "articles_blocks_cta" USING btree ("_order");
  CREATE INDEX "articles_blocks_cta_parent_id_idx" ON "articles_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_cta_path_idx" ON "articles_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "articles_blocks_cta_locales_locale_parent_id_unique" ON "articles_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_sections_order_idx" ON "articles_sections" USING btree ("_order");
  CREATE INDEX "articles_sections_parent_id_idx" ON "articles_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "articles_sections_locales_locale_parent_id_unique" ON "articles_sections_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_tags_order_idx" ON "articles_tags" USING btree ("_order");
  CREATE INDEX "articles_tags_parent_id_idx" ON "articles_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "articles_slug_idx" ON "articles" USING btree ("slug");
  CREATE INDEX "articles_status_idx" ON "articles" USING btree ("status");
  CREATE INDEX "articles_published_at_idx" ON "articles" USING btree ("published_at");
  CREATE INDEX "articles_cover_image_idx" ON "articles" USING btree ("cover_image_id");
  CREATE INDEX "articles_seo_seo_image_idx" ON "articles" USING btree ("seo_image_id");
  CREATE INDEX "articles_updated_at_idx" ON "articles" USING btree ("updated_at");
  CREATE INDEX "articles_created_at_idx" ON "articles" USING btree ("created_at");
  CREATE INDEX "articles__status_idx" ON "articles" USING btree ("_status");
  CREATE UNIQUE INDEX "articles_locales_locale_parent_id_unique" ON "articles_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_body_order_idx" ON "_articles_v_blocks_body" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_body_parent_id_idx" ON "_articles_v_blocks_body" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_blocks_body_path_idx" ON "_articles_v_blocks_body" USING btree ("_path");
  CREATE UNIQUE INDEX "_articles_v_blocks_body_locales_locale_parent_id_unique" ON "_articles_v_blocks_body_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_media_order_idx" ON "_articles_v_blocks_media" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_media_parent_id_idx" ON "_articles_v_blocks_media" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_blocks_media_path_idx" ON "_articles_v_blocks_media" USING btree ("_path");
  CREATE INDEX "_articles_v_blocks_media_image_idx" ON "_articles_v_blocks_media" USING btree ("image_id");
  CREATE UNIQUE INDEX "_articles_v_blocks_media_locales_locale_parent_id_unique" ON "_articles_v_blocks_media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_gallery_items_order_idx" ON "_articles_v_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_gallery_items_parent_id_idx" ON "_articles_v_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_blocks_gallery_items_image_idx" ON "_articles_v_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_articles_v_blocks_gallery_items_locales_locale_parent_id_un" ON "_articles_v_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_gallery_order_idx" ON "_articles_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_gallery_parent_id_idx" ON "_articles_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_blocks_gallery_path_idx" ON "_articles_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_articles_v_blocks_feature_list_items_order_idx" ON "_articles_v_blocks_feature_list_items" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_feature_list_items_parent_id_idx" ON "_articles_v_blocks_feature_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_articles_v_blocks_feature_list_items_locales_locale_parent_" ON "_articles_v_blocks_feature_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_feature_list_order_idx" ON "_articles_v_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_feature_list_parent_id_idx" ON "_articles_v_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_blocks_feature_list_path_idx" ON "_articles_v_blocks_feature_list" USING btree ("_path");
  CREATE UNIQUE INDEX "_articles_v_blocks_feature_list_locales_locale_parent_id_uni" ON "_articles_v_blocks_feature_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_metrics_items_order_idx" ON "_articles_v_blocks_metrics_items" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_metrics_items_parent_id_idx" ON "_articles_v_blocks_metrics_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_articles_v_blocks_metrics_items_locales_locale_parent_id_un" ON "_articles_v_blocks_metrics_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_metrics_order_idx" ON "_articles_v_blocks_metrics" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_metrics_parent_id_idx" ON "_articles_v_blocks_metrics" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_blocks_metrics_path_idx" ON "_articles_v_blocks_metrics" USING btree ("_path");
  CREATE UNIQUE INDEX "_articles_v_blocks_metrics_locales_locale_parent_id_unique" ON "_articles_v_blocks_metrics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_callout_order_idx" ON "_articles_v_blocks_callout" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_callout_parent_id_idx" ON "_articles_v_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_blocks_callout_path_idx" ON "_articles_v_blocks_callout" USING btree ("_path");
  CREATE UNIQUE INDEX "_articles_v_blocks_callout_locales_locale_parent_id_unique" ON "_articles_v_blocks_callout_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_quote_order_idx" ON "_articles_v_blocks_quote" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_quote_parent_id_idx" ON "_articles_v_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_blocks_quote_path_idx" ON "_articles_v_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "_articles_v_blocks_quote_locales_locale_parent_id_unique" ON "_articles_v_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_blocks_cta_order_idx" ON "_articles_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_articles_v_blocks_cta_parent_id_idx" ON "_articles_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_blocks_cta_path_idx" ON "_articles_v_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "_articles_v_blocks_cta_locales_locale_parent_id_unique" ON "_articles_v_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_version_sections_order_idx" ON "_articles_v_version_sections" USING btree ("_order");
  CREATE INDEX "_articles_v_version_sections_parent_id_idx" ON "_articles_v_version_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_articles_v_version_sections_locales_locale_parent_id_unique" ON "_articles_v_version_sections_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_articles_v_version_tags_order_idx" ON "_articles_v_version_tags" USING btree ("_order");
  CREATE INDEX "_articles_v_version_tags_parent_id_idx" ON "_articles_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_articles_v_parent_idx" ON "_articles_v" USING btree ("parent_id");
  CREATE INDEX "_articles_v_version_version_slug_idx" ON "_articles_v" USING btree ("version_slug");
  CREATE INDEX "_articles_v_version_version_status_idx" ON "_articles_v" USING btree ("version_status");
  CREATE INDEX "_articles_v_version_version_published_at_idx" ON "_articles_v" USING btree ("version_published_at");
  CREATE INDEX "_articles_v_version_version_cover_image_idx" ON "_articles_v" USING btree ("version_cover_image_id");
  CREATE INDEX "_articles_v_version_seo_version_seo_image_idx" ON "_articles_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_articles_v_version_version_updated_at_idx" ON "_articles_v" USING btree ("version_updated_at");
  CREATE INDEX "_articles_v_version_version_created_at_idx" ON "_articles_v" USING btree ("version_created_at");
  CREATE INDEX "_articles_v_version_version__status_idx" ON "_articles_v" USING btree ("version__status");
  CREATE INDEX "_articles_v_created_at_idx" ON "_articles_v" USING btree ("created_at");
  CREATE INDEX "_articles_v_updated_at_idx" ON "_articles_v" USING btree ("updated_at");
  CREATE INDEX "_articles_v_snapshot_idx" ON "_articles_v" USING btree ("snapshot");
  CREATE INDEX "_articles_v_published_locale_idx" ON "_articles_v" USING btree ("published_locale");
  CREATE INDEX "_articles_v_latest_idx" ON "_articles_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_articles_v_locales_locale_parent_id_unique" ON "_articles_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_body_order_idx" ON "pages_blocks_body" USING btree ("_order");
  CREATE INDEX "pages_blocks_body_parent_id_idx" ON "pages_blocks_body" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_body_path_idx" ON "pages_blocks_body" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_body_locales_locale_parent_id_unique" ON "pages_blocks_body_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_media_order_idx" ON "pages_blocks_media" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_parent_id_idx" ON "pages_blocks_media" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_path_idx" ON "pages_blocks_media" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_image_idx" ON "pages_blocks_media" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_media_locales_locale_parent_id_unique" ON "pages_blocks_media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_gallery_items_order_idx" ON "pages_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_items_parent_id_idx" ON "pages_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_items_image_idx" ON "pages_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_gallery_items_locales_locale_parent_id_unique" ON "pages_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature_list_items_order_idx" ON "pages_blocks_feature_list_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_list_items_parent_id_idx" ON "pages_blocks_feature_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_feature_list_items_locales_locale_parent_id_uni" ON "pages_blocks_feature_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_feature_list_order_idx" ON "pages_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_list_parent_id_idx" ON "pages_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_list_path_idx" ON "pages_blocks_feature_list" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_feature_list_locales_locale_parent_id_unique" ON "pages_blocks_feature_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_metrics_items_order_idx" ON "pages_blocks_metrics_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_metrics_items_parent_id_idx" ON "pages_blocks_metrics_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_metrics_items_locales_locale_parent_id_unique" ON "pages_blocks_metrics_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_metrics_order_idx" ON "pages_blocks_metrics" USING btree ("_order");
  CREATE INDEX "pages_blocks_metrics_parent_id_idx" ON "pages_blocks_metrics" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_metrics_path_idx" ON "pages_blocks_metrics" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_metrics_locales_locale_parent_id_unique" ON "pages_blocks_metrics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_callout_order_idx" ON "pages_blocks_callout" USING btree ("_order");
  CREATE INDEX "pages_blocks_callout_parent_id_idx" ON "pages_blocks_callout" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_callout_path_idx" ON "pages_blocks_callout" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_callout_locales_locale_parent_id_unique" ON "pages_blocks_callout_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_quote_order_idx" ON "pages_blocks_quote" USING btree ("_order");
  CREATE INDEX "pages_blocks_quote_parent_id_idx" ON "pages_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quote_path_idx" ON "pages_blocks_quote" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_quote_locales_locale_parent_id_unique" ON "pages_blocks_quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_cta_locales_locale_parent_id_unique" ON "pages_blocks_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_sections_order_idx" ON "pages_sections" USING btree ("_order");
  CREATE INDEX "pages_sections_parent_id_idx" ON "pages_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_sections_locales_locale_parent_id_unique" ON "pages_sections_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_status_idx" ON "pages" USING btree ("status");
  CREATE INDEX "pages_seo_seo_image_idx" ON "pages" USING btree ("seo_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_folders_id_idx" ON "payload_locked_documents_rels" USING btree ("media_folders_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_articles_id_idx" ON "payload_locked_documents_rels" USING btree ("articles_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_titles_order_idx" ON "site_titles" USING btree ("_order");
  CREATE INDEX "site_titles_parent_id_idx" ON "site_titles" USING btree ("_parent_id");
  CREATE INDEX "site_titles_locale_idx" ON "site_titles" USING btree ("_locale");
  CREATE INDEX "navigation_items_active_paths_order_idx" ON "navigation_items_active_paths" USING btree ("_order");
  CREATE INDEX "navigation_items_active_paths_parent_id_idx" ON "navigation_items_active_paths" USING btree ("_parent_id");
  CREATE INDEX "navigation_items_active_paths_locale_idx" ON "navigation_items_active_paths" USING btree ("_locale");
  CREATE INDEX "navigation_items_order_idx" ON "navigation_items" USING btree ("_order");
  CREATE INDEX "navigation_items_parent_id_idx" ON "navigation_items" USING btree ("_parent_id");
  CREATE INDEX "navigation_items_locale_idx" ON "navigation_items" USING btree ("_locale");
  CREATE UNIQUE INDEX "navigation_locales_locale_parent_id_unique" ON "navigation_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "social_links_order_idx" ON "social_links" USING btree ("_order");
  CREATE INDEX "social_links_parent_id_idx" ON "social_links" USING btree ("_parent_id");
  CREATE INDEX "social_links_locale_idx" ON "social_links" USING btree ("_locale");
  CREATE INDEX "seo_defaults_image_idx" ON "seo_defaults" USING btree ("image_id");
  CREATE UNIQUE INDEX "seo_defaults_locales_locale_parent_id_unique" ON "seo_defaults_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "page_seo_copy_locales_locale_parent_id_unique" ON "page_seo_copy_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "notifications_items_order_idx" ON "notifications_items" USING btree ("_order");
  CREATE INDEX "notifications_items_parent_id_idx" ON "notifications_items" USING btree ("_parent_id");
  CREATE INDEX "notifications_items_locale_idx" ON "notifications_items" USING btree ("_locale");
  CREATE UNIQUE INDEX "cursor_copy_locales_locale_parent_id_unique" ON "cursor_copy_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "experience_items_order_idx" ON "experience_items" USING btree ("_order");
  CREATE INDEX "experience_items_parent_id_idx" ON "experience_items" USING btree ("_parent_id");
  CREATE INDEX "experience_items_locale_idx" ON "experience_items" USING btree ("_locale");
  CREATE UNIQUE INDEX "work_page_copy_locales_locale_parent_id_unique" ON "work_page_copy_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "blog_page_copy_locales_locale_parent_id_unique" ON "blog_page_copy_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "about_page_copy_intro_paragraphs_order_idx" ON "about_page_copy_intro_paragraphs" USING btree ("_order");
  CREATE INDEX "about_page_copy_intro_paragraphs_parent_id_idx" ON "about_page_copy_intro_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "about_page_copy_intro_paragraphs_locale_idx" ON "about_page_copy_intro_paragraphs" USING btree ("_locale");
  CREATE INDEX "about_page_copy_intro_bullets_order_idx" ON "about_page_copy_intro_bullets" USING btree ("_order");
  CREATE INDEX "about_page_copy_intro_bullets_parent_id_idx" ON "about_page_copy_intro_bullets" USING btree ("_parent_id");
  CREATE INDEX "about_page_copy_intro_bullets_locale_idx" ON "about_page_copy_intro_bullets" USING btree ("_locale");
  CREATE INDEX "about_page_copy_intro_contact_line_links_order_idx" ON "about_page_copy_intro_contact_line_links" USING btree ("order");
  CREATE INDEX "about_page_copy_intro_contact_line_links_parent_idx" ON "about_page_copy_intro_contact_line_links" USING btree ("parent_id");
  CREATE INDEX "about_page_copy_gallery_sections_images_order_idx" ON "about_page_copy_gallery_sections_images" USING btree ("_order");
  CREATE INDEX "about_page_copy_gallery_sections_images_parent_id_idx" ON "about_page_copy_gallery_sections_images" USING btree ("_parent_id");
  CREATE INDEX "about_page_copy_gallery_sections_images_locale_idx" ON "about_page_copy_gallery_sections_images" USING btree ("_locale");
  CREATE INDEX "about_page_copy_gallery_sections_images_image_idx" ON "about_page_copy_gallery_sections_images" USING btree ("image_id");
  CREATE INDEX "about_page_copy_gallery_sections_order_idx" ON "about_page_copy_gallery_sections" USING btree ("_order");
  CREATE INDEX "about_page_copy_gallery_sections_parent_id_idx" ON "about_page_copy_gallery_sections" USING btree ("_parent_id");
  CREATE INDEX "about_page_copy_gallery_sections_locale_idx" ON "about_page_copy_gallery_sections" USING btree ("_locale");
  CREATE UNIQUE INDEX "about_page_copy_locales_locale_parent_id_unique" ON "about_page_copy_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "resume_page_copy_locales_locale_parent_id_unique" ON "resume_page_copy_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "error_page_copy_locales_locale_parent_id_unique" ON "error_page_copy_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media_folders" CASCADE;
  DROP TABLE "media_tags" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "projects_blocks_body" CASCADE;
  DROP TABLE "projects_blocks_body_locales" CASCADE;
  DROP TABLE "projects_blocks_media" CASCADE;
  DROP TABLE "projects_blocks_media_locales" CASCADE;
  DROP TABLE "projects_blocks_gallery_items" CASCADE;
  DROP TABLE "projects_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "projects_blocks_gallery" CASCADE;
  DROP TABLE "projects_blocks_feature_list_items" CASCADE;
  DROP TABLE "projects_blocks_feature_list_items_locales" CASCADE;
  DROP TABLE "projects_blocks_feature_list" CASCADE;
  DROP TABLE "projects_blocks_feature_list_locales" CASCADE;
  DROP TABLE "projects_blocks_metrics_items" CASCADE;
  DROP TABLE "projects_blocks_metrics_items_locales" CASCADE;
  DROP TABLE "projects_blocks_metrics" CASCADE;
  DROP TABLE "projects_blocks_metrics_locales" CASCADE;
  DROP TABLE "projects_blocks_callout" CASCADE;
  DROP TABLE "projects_blocks_callout_locales" CASCADE;
  DROP TABLE "projects_blocks_quote" CASCADE;
  DROP TABLE "projects_blocks_quote_locales" CASCADE;
  DROP TABLE "projects_blocks_cta" CASCADE;
  DROP TABLE "projects_blocks_cta_locales" CASCADE;
  DROP TABLE "projects_sections" CASCADE;
  DROP TABLE "projects_sections_locales" CASCADE;
  DROP TABLE "projects_tags" CASCADE;
  DROP TABLE "projects_meta" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "projects_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_body" CASCADE;
  DROP TABLE "_projects_v_blocks_body_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_media" CASCADE;
  DROP TABLE "_projects_v_blocks_media_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_gallery_items" CASCADE;
  DROP TABLE "_projects_v_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_gallery" CASCADE;
  DROP TABLE "_projects_v_blocks_feature_list_items" CASCADE;
  DROP TABLE "_projects_v_blocks_feature_list_items_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_feature_list" CASCADE;
  DROP TABLE "_projects_v_blocks_feature_list_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_metrics_items" CASCADE;
  DROP TABLE "_projects_v_blocks_metrics_items_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_metrics" CASCADE;
  DROP TABLE "_projects_v_blocks_metrics_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_callout" CASCADE;
  DROP TABLE "_projects_v_blocks_callout_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_quote" CASCADE;
  DROP TABLE "_projects_v_blocks_quote_locales" CASCADE;
  DROP TABLE "_projects_v_blocks_cta" CASCADE;
  DROP TABLE "_projects_v_blocks_cta_locales" CASCADE;
  DROP TABLE "_projects_v_version_sections" CASCADE;
  DROP TABLE "_projects_v_version_sections_locales" CASCADE;
  DROP TABLE "_projects_v_version_tags" CASCADE;
  DROP TABLE "_projects_v_version_meta" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "_projects_v_locales" CASCADE;
  DROP TABLE "articles_blocks_body" CASCADE;
  DROP TABLE "articles_blocks_body_locales" CASCADE;
  DROP TABLE "articles_blocks_media" CASCADE;
  DROP TABLE "articles_blocks_media_locales" CASCADE;
  DROP TABLE "articles_blocks_gallery_items" CASCADE;
  DROP TABLE "articles_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "articles_blocks_gallery" CASCADE;
  DROP TABLE "articles_blocks_feature_list_items" CASCADE;
  DROP TABLE "articles_blocks_feature_list_items_locales" CASCADE;
  DROP TABLE "articles_blocks_feature_list" CASCADE;
  DROP TABLE "articles_blocks_feature_list_locales" CASCADE;
  DROP TABLE "articles_blocks_metrics_items" CASCADE;
  DROP TABLE "articles_blocks_metrics_items_locales" CASCADE;
  DROP TABLE "articles_blocks_metrics" CASCADE;
  DROP TABLE "articles_blocks_metrics_locales" CASCADE;
  DROP TABLE "articles_blocks_callout" CASCADE;
  DROP TABLE "articles_blocks_callout_locales" CASCADE;
  DROP TABLE "articles_blocks_quote" CASCADE;
  DROP TABLE "articles_blocks_quote_locales" CASCADE;
  DROP TABLE "articles_blocks_cta" CASCADE;
  DROP TABLE "articles_blocks_cta_locales" CASCADE;
  DROP TABLE "articles_sections" CASCADE;
  DROP TABLE "articles_sections_locales" CASCADE;
  DROP TABLE "articles_tags" CASCADE;
  DROP TABLE "articles" CASCADE;
  DROP TABLE "articles_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_body" CASCADE;
  DROP TABLE "_articles_v_blocks_body_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_media" CASCADE;
  DROP TABLE "_articles_v_blocks_media_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_gallery_items" CASCADE;
  DROP TABLE "_articles_v_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_gallery" CASCADE;
  DROP TABLE "_articles_v_blocks_feature_list_items" CASCADE;
  DROP TABLE "_articles_v_blocks_feature_list_items_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_feature_list" CASCADE;
  DROP TABLE "_articles_v_blocks_feature_list_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_metrics_items" CASCADE;
  DROP TABLE "_articles_v_blocks_metrics_items_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_metrics" CASCADE;
  DROP TABLE "_articles_v_blocks_metrics_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_callout" CASCADE;
  DROP TABLE "_articles_v_blocks_callout_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_quote" CASCADE;
  DROP TABLE "_articles_v_blocks_quote_locales" CASCADE;
  DROP TABLE "_articles_v_blocks_cta" CASCADE;
  DROP TABLE "_articles_v_blocks_cta_locales" CASCADE;
  DROP TABLE "_articles_v_version_sections" CASCADE;
  DROP TABLE "_articles_v_version_sections_locales" CASCADE;
  DROP TABLE "_articles_v_version_tags" CASCADE;
  DROP TABLE "_articles_v" CASCADE;
  DROP TABLE "_articles_v_locales" CASCADE;
  DROP TABLE "pages_blocks_body" CASCADE;
  DROP TABLE "pages_blocks_body_locales" CASCADE;
  DROP TABLE "pages_blocks_media" CASCADE;
  DROP TABLE "pages_blocks_media_locales" CASCADE;
  DROP TABLE "pages_blocks_gallery_items" CASCADE;
  DROP TABLE "pages_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_feature_list_items" CASCADE;
  DROP TABLE "pages_blocks_feature_list_items_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_list" CASCADE;
  DROP TABLE "pages_blocks_feature_list_locales" CASCADE;
  DROP TABLE "pages_blocks_metrics_items" CASCADE;
  DROP TABLE "pages_blocks_metrics_items_locales" CASCADE;
  DROP TABLE "pages_blocks_metrics" CASCADE;
  DROP TABLE "pages_blocks_metrics_locales" CASCADE;
  DROP TABLE "pages_blocks_callout" CASCADE;
  DROP TABLE "pages_blocks_callout_locales" CASCADE;
  DROP TABLE "pages_blocks_quote" CASCADE;
  DROP TABLE "pages_blocks_quote_locales" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_cta_locales" CASCADE;
  DROP TABLE "pages_sections" CASCADE;
  DROP TABLE "pages_sections_locales" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_titles" CASCADE;
  DROP TABLE "site" CASCADE;
  DROP TABLE "navigation_items_active_paths" CASCADE;
  DROP TABLE "navigation_items" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TABLE "navigation_locales" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP TABLE "social_links" CASCADE;
  DROP TABLE "social" CASCADE;
  DROP TABLE "seo_defaults" CASCADE;
  DROP TABLE "seo_defaults_locales" CASCADE;
  DROP TABLE "page_seo_copy" CASCADE;
  DROP TABLE "page_seo_copy_locales" CASCADE;
  DROP TABLE "notifications_items" CASCADE;
  DROP TABLE "notifications" CASCADE;
  DROP TABLE "cursor_copy" CASCADE;
  DROP TABLE "cursor_copy_locales" CASCADE;
  DROP TABLE "experience_items" CASCADE;
  DROP TABLE "experience" CASCADE;
  DROP TABLE "work_page_copy" CASCADE;
  DROP TABLE "work_page_copy_locales" CASCADE;
  DROP TABLE "blog_page_copy" CASCADE;
  DROP TABLE "blog_page_copy_locales" CASCADE;
  DROP TABLE "about_page_copy_intro_paragraphs" CASCADE;
  DROP TABLE "about_page_copy_intro_bullets" CASCADE;
  DROP TABLE "about_page_copy_intro_contact_line_links" CASCADE;
  DROP TABLE "about_page_copy_gallery_sections_images" CASCADE;
  DROP TABLE "about_page_copy_gallery_sections" CASCADE;
  DROP TABLE "about_page_copy" CASCADE;
  DROP TABLE "about_page_copy_locales" CASCADE;
  DROP TABLE "resume_page_copy" CASCADE;
  DROP TABLE "resume_page_copy_locales" CASCADE;
  DROP TABLE "error_page_copy" CASCADE;
  DROP TABLE "error_page_copy_locales" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_media_usage";
  DROP TYPE "public"."enum_projects_blocks_body_style_preset";
  DROP TYPE "public"."enum_projects_blocks_body_advanced_style_weight";
  DROP TYPE "public"."enum_projects_blocks_body_advanced_style_tone";
  DROP TYPE "public"."enum_projects_blocks_body_advanced_style_size";
  DROP TYPE "public"."enum_projects_blocks_body_advanced_style_align";
  DROP TYPE "public"."enum_projects_blocks_body_advanced_style_spacing";
  DROP TYPE "public"."enum_projects_blocks_body_advanced_style_layout";
  DROP TYPE "public"."enum_projects_blocks_media_layout_preset";
  DROP TYPE "public"."enum_projects_blocks_media_style_preset";
  DROP TYPE "public"."enum_projects_blocks_media_advanced_style_weight";
  DROP TYPE "public"."enum_projects_blocks_media_advanced_style_tone";
  DROP TYPE "public"."enum_projects_blocks_media_advanced_style_size";
  DROP TYPE "public"."enum_projects_blocks_media_advanced_style_align";
  DROP TYPE "public"."enum_projects_blocks_media_advanced_style_spacing";
  DROP TYPE "public"."enum_projects_blocks_media_advanced_style_layout";
  DROP TYPE "public"."enum_projects_blocks_gallery_layout_preset";
  DROP TYPE "public"."enum_projects_blocks_gallery_style_preset";
  DROP TYPE "public"."enum_projects_blocks_gallery_advanced_style_weight";
  DROP TYPE "public"."enum_projects_blocks_gallery_advanced_style_tone";
  DROP TYPE "public"."enum_projects_blocks_gallery_advanced_style_size";
  DROP TYPE "public"."enum_projects_blocks_gallery_advanced_style_align";
  DROP TYPE "public"."enum_projects_blocks_gallery_advanced_style_spacing";
  DROP TYPE "public"."enum_projects_blocks_gallery_advanced_style_layout";
  DROP TYPE "public"."enum_projects_blocks_feature_list_style_preset";
  DROP TYPE "public"."enum_projects_blocks_feature_list_advanced_style_weight";
  DROP TYPE "public"."enum_projects_blocks_feature_list_advanced_style_tone";
  DROP TYPE "public"."enum_projects_blocks_feature_list_advanced_style_size";
  DROP TYPE "public"."enum_projects_blocks_feature_list_advanced_style_align";
  DROP TYPE "public"."enum_projects_blocks_feature_list_advanced_style_spacing";
  DROP TYPE "public"."enum_projects_blocks_feature_list_advanced_style_layout";
  DROP TYPE "public"."enum_projects_blocks_metrics_style_preset";
  DROP TYPE "public"."enum_projects_blocks_metrics_advanced_style_weight";
  DROP TYPE "public"."enum_projects_blocks_metrics_advanced_style_tone";
  DROP TYPE "public"."enum_projects_blocks_metrics_advanced_style_size";
  DROP TYPE "public"."enum_projects_blocks_metrics_advanced_style_align";
  DROP TYPE "public"."enum_projects_blocks_metrics_advanced_style_spacing";
  DROP TYPE "public"."enum_projects_blocks_metrics_advanced_style_layout";
  DROP TYPE "public"."enum_projects_blocks_callout_tone";
  DROP TYPE "public"."enum_projects_blocks_callout_style_preset";
  DROP TYPE "public"."enum_projects_blocks_callout_advanced_style_weight";
  DROP TYPE "public"."enum_projects_blocks_callout_advanced_style_tone";
  DROP TYPE "public"."enum_projects_blocks_callout_advanced_style_size";
  DROP TYPE "public"."enum_projects_blocks_callout_advanced_style_align";
  DROP TYPE "public"."enum_projects_blocks_callout_advanced_style_spacing";
  DROP TYPE "public"."enum_projects_blocks_callout_advanced_style_layout";
  DROP TYPE "public"."enum_projects_blocks_quote_style_preset";
  DROP TYPE "public"."enum_projects_blocks_quote_advanced_style_weight";
  DROP TYPE "public"."enum_projects_blocks_quote_advanced_style_tone";
  DROP TYPE "public"."enum_projects_blocks_quote_advanced_style_size";
  DROP TYPE "public"."enum_projects_blocks_quote_advanced_style_align";
  DROP TYPE "public"."enum_projects_blocks_quote_advanced_style_spacing";
  DROP TYPE "public"."enum_projects_blocks_quote_advanced_style_layout";
  DROP TYPE "public"."enum_projects_blocks_cta_type";
  DROP TYPE "public"."enum_projects_blocks_cta_style_preset";
  DROP TYPE "public"."enum_projects_blocks_cta_advanced_style_weight";
  DROP TYPE "public"."enum_projects_blocks_cta_advanced_style_tone";
  DROP TYPE "public"."enum_projects_blocks_cta_advanced_style_size";
  DROP TYPE "public"."enum_projects_blocks_cta_advanced_style_align";
  DROP TYPE "public"."enum_projects_blocks_cta_advanced_style_spacing";
  DROP TYPE "public"."enum_projects_blocks_cta_advanced_style_layout";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum_projects_destination_type";
  DROP TYPE "public"."enum__projects_v_blocks_body_style_preset";
  DROP TYPE "public"."enum__projects_v_blocks_body_advanced_style_weight";
  DROP TYPE "public"."enum__projects_v_blocks_body_advanced_style_tone";
  DROP TYPE "public"."enum__projects_v_blocks_body_advanced_style_size";
  DROP TYPE "public"."enum__projects_v_blocks_body_advanced_style_align";
  DROP TYPE "public"."enum__projects_v_blocks_body_advanced_style_spacing";
  DROP TYPE "public"."enum__projects_v_blocks_body_advanced_style_layout";
  DROP TYPE "public"."enum__projects_v_blocks_media_layout_preset";
  DROP TYPE "public"."enum__projects_v_blocks_media_style_preset";
  DROP TYPE "public"."enum__projects_v_blocks_media_advanced_style_weight";
  DROP TYPE "public"."enum__projects_v_blocks_media_advanced_style_tone";
  DROP TYPE "public"."enum__projects_v_blocks_media_advanced_style_size";
  DROP TYPE "public"."enum__projects_v_blocks_media_advanced_style_align";
  DROP TYPE "public"."enum__projects_v_blocks_media_advanced_style_spacing";
  DROP TYPE "public"."enum__projects_v_blocks_media_advanced_style_layout";
  DROP TYPE "public"."enum__projects_v_blocks_gallery_layout_preset";
  DROP TYPE "public"."enum__projects_v_blocks_gallery_style_preset";
  DROP TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_weight";
  DROP TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_tone";
  DROP TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_size";
  DROP TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_align";
  DROP TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_spacing";
  DROP TYPE "public"."enum__projects_v_blocks_gallery_advanced_style_layout";
  DROP TYPE "public"."enum__projects_v_blocks_feature_list_style_preset";
  DROP TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_weight";
  DROP TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_tone";
  DROP TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_size";
  DROP TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_align";
  DROP TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_spacing";
  DROP TYPE "public"."enum__projects_v_blocks_feature_list_advanced_style_layout";
  DROP TYPE "public"."enum__projects_v_blocks_metrics_style_preset";
  DROP TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_weight";
  DROP TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_tone";
  DROP TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_size";
  DROP TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_align";
  DROP TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_spacing";
  DROP TYPE "public"."enum__projects_v_blocks_metrics_advanced_style_layout";
  DROP TYPE "public"."enum__projects_v_blocks_callout_tone";
  DROP TYPE "public"."enum__projects_v_blocks_callout_style_preset";
  DROP TYPE "public"."enum__projects_v_blocks_callout_advanced_style_weight";
  DROP TYPE "public"."enum__projects_v_blocks_callout_advanced_style_tone";
  DROP TYPE "public"."enum__projects_v_blocks_callout_advanced_style_size";
  DROP TYPE "public"."enum__projects_v_blocks_callout_advanced_style_align";
  DROP TYPE "public"."enum__projects_v_blocks_callout_advanced_style_spacing";
  DROP TYPE "public"."enum__projects_v_blocks_callout_advanced_style_layout";
  DROP TYPE "public"."enum__projects_v_blocks_quote_style_preset";
  DROP TYPE "public"."enum__projects_v_blocks_quote_advanced_style_weight";
  DROP TYPE "public"."enum__projects_v_blocks_quote_advanced_style_tone";
  DROP TYPE "public"."enum__projects_v_blocks_quote_advanced_style_size";
  DROP TYPE "public"."enum__projects_v_blocks_quote_advanced_style_align";
  DROP TYPE "public"."enum__projects_v_blocks_quote_advanced_style_spacing";
  DROP TYPE "public"."enum__projects_v_blocks_quote_advanced_style_layout";
  DROP TYPE "public"."enum__projects_v_blocks_cta_type";
  DROP TYPE "public"."enum__projects_v_blocks_cta_style_preset";
  DROP TYPE "public"."enum__projects_v_blocks_cta_advanced_style_weight";
  DROP TYPE "public"."enum__projects_v_blocks_cta_advanced_style_tone";
  DROP TYPE "public"."enum__projects_v_blocks_cta_advanced_style_size";
  DROP TYPE "public"."enum__projects_v_blocks_cta_advanced_style_align";
  DROP TYPE "public"."enum__projects_v_blocks_cta_advanced_style_spacing";
  DROP TYPE "public"."enum__projects_v_blocks_cta_advanced_style_layout";
  DROP TYPE "public"."enum__projects_v_version_status";
  DROP TYPE "public"."enum__projects_v_version_destination_type";
  DROP TYPE "public"."enum__projects_v_published_locale";
  DROP TYPE "public"."enum_articles_blocks_body_style_preset";
  DROP TYPE "public"."enum_articles_blocks_body_advanced_style_weight";
  DROP TYPE "public"."enum_articles_blocks_body_advanced_style_tone";
  DROP TYPE "public"."enum_articles_blocks_body_advanced_style_size";
  DROP TYPE "public"."enum_articles_blocks_body_advanced_style_align";
  DROP TYPE "public"."enum_articles_blocks_body_advanced_style_spacing";
  DROP TYPE "public"."enum_articles_blocks_body_advanced_style_layout";
  DROP TYPE "public"."enum_articles_blocks_media_layout_preset";
  DROP TYPE "public"."enum_articles_blocks_media_style_preset";
  DROP TYPE "public"."enum_articles_blocks_media_advanced_style_weight";
  DROP TYPE "public"."enum_articles_blocks_media_advanced_style_tone";
  DROP TYPE "public"."enum_articles_blocks_media_advanced_style_size";
  DROP TYPE "public"."enum_articles_blocks_media_advanced_style_align";
  DROP TYPE "public"."enum_articles_blocks_media_advanced_style_spacing";
  DROP TYPE "public"."enum_articles_blocks_media_advanced_style_layout";
  DROP TYPE "public"."enum_articles_blocks_gallery_layout_preset";
  DROP TYPE "public"."enum_articles_blocks_gallery_style_preset";
  DROP TYPE "public"."enum_articles_blocks_gallery_advanced_style_weight";
  DROP TYPE "public"."enum_articles_blocks_gallery_advanced_style_tone";
  DROP TYPE "public"."enum_articles_blocks_gallery_advanced_style_size";
  DROP TYPE "public"."enum_articles_blocks_gallery_advanced_style_align";
  DROP TYPE "public"."enum_articles_blocks_gallery_advanced_style_spacing";
  DROP TYPE "public"."enum_articles_blocks_gallery_advanced_style_layout";
  DROP TYPE "public"."enum_articles_blocks_feature_list_style_preset";
  DROP TYPE "public"."enum_articles_blocks_feature_list_advanced_style_weight";
  DROP TYPE "public"."enum_articles_blocks_feature_list_advanced_style_tone";
  DROP TYPE "public"."enum_articles_blocks_feature_list_advanced_style_size";
  DROP TYPE "public"."enum_articles_blocks_feature_list_advanced_style_align";
  DROP TYPE "public"."enum_articles_blocks_feature_list_advanced_style_spacing";
  DROP TYPE "public"."enum_articles_blocks_feature_list_advanced_style_layout";
  DROP TYPE "public"."enum_articles_blocks_metrics_style_preset";
  DROP TYPE "public"."enum_articles_blocks_metrics_advanced_style_weight";
  DROP TYPE "public"."enum_articles_blocks_metrics_advanced_style_tone";
  DROP TYPE "public"."enum_articles_blocks_metrics_advanced_style_size";
  DROP TYPE "public"."enum_articles_blocks_metrics_advanced_style_align";
  DROP TYPE "public"."enum_articles_blocks_metrics_advanced_style_spacing";
  DROP TYPE "public"."enum_articles_blocks_metrics_advanced_style_layout";
  DROP TYPE "public"."enum_articles_blocks_callout_tone";
  DROP TYPE "public"."enum_articles_blocks_callout_style_preset";
  DROP TYPE "public"."enum_articles_blocks_callout_advanced_style_weight";
  DROP TYPE "public"."enum_articles_blocks_callout_advanced_style_tone";
  DROP TYPE "public"."enum_articles_blocks_callout_advanced_style_size";
  DROP TYPE "public"."enum_articles_blocks_callout_advanced_style_align";
  DROP TYPE "public"."enum_articles_blocks_callout_advanced_style_spacing";
  DROP TYPE "public"."enum_articles_blocks_callout_advanced_style_layout";
  DROP TYPE "public"."enum_articles_blocks_quote_style_preset";
  DROP TYPE "public"."enum_articles_blocks_quote_advanced_style_weight";
  DROP TYPE "public"."enum_articles_blocks_quote_advanced_style_tone";
  DROP TYPE "public"."enum_articles_blocks_quote_advanced_style_size";
  DROP TYPE "public"."enum_articles_blocks_quote_advanced_style_align";
  DROP TYPE "public"."enum_articles_blocks_quote_advanced_style_spacing";
  DROP TYPE "public"."enum_articles_blocks_quote_advanced_style_layout";
  DROP TYPE "public"."enum_articles_blocks_cta_type";
  DROP TYPE "public"."enum_articles_blocks_cta_style_preset";
  DROP TYPE "public"."enum_articles_blocks_cta_advanced_style_weight";
  DROP TYPE "public"."enum_articles_blocks_cta_advanced_style_tone";
  DROP TYPE "public"."enum_articles_blocks_cta_advanced_style_size";
  DROP TYPE "public"."enum_articles_blocks_cta_advanced_style_align";
  DROP TYPE "public"."enum_articles_blocks_cta_advanced_style_spacing";
  DROP TYPE "public"."enum_articles_blocks_cta_advanced_style_layout";
  DROP TYPE "public"."enum_articles_status";
  DROP TYPE "public"."enum_articles_destination_type";
  DROP TYPE "public"."enum__articles_v_blocks_body_style_preset";
  DROP TYPE "public"."enum__articles_v_blocks_body_advanced_style_weight";
  DROP TYPE "public"."enum__articles_v_blocks_body_advanced_style_tone";
  DROP TYPE "public"."enum__articles_v_blocks_body_advanced_style_size";
  DROP TYPE "public"."enum__articles_v_blocks_body_advanced_style_align";
  DROP TYPE "public"."enum__articles_v_blocks_body_advanced_style_spacing";
  DROP TYPE "public"."enum__articles_v_blocks_body_advanced_style_layout";
  DROP TYPE "public"."enum__articles_v_blocks_media_layout_preset";
  DROP TYPE "public"."enum__articles_v_blocks_media_style_preset";
  DROP TYPE "public"."enum__articles_v_blocks_media_advanced_style_weight";
  DROP TYPE "public"."enum__articles_v_blocks_media_advanced_style_tone";
  DROP TYPE "public"."enum__articles_v_blocks_media_advanced_style_size";
  DROP TYPE "public"."enum__articles_v_blocks_media_advanced_style_align";
  DROP TYPE "public"."enum__articles_v_blocks_media_advanced_style_spacing";
  DROP TYPE "public"."enum__articles_v_blocks_media_advanced_style_layout";
  DROP TYPE "public"."enum__articles_v_blocks_gallery_layout_preset";
  DROP TYPE "public"."enum__articles_v_blocks_gallery_style_preset";
  DROP TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_weight";
  DROP TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_tone";
  DROP TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_size";
  DROP TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_align";
  DROP TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_spacing";
  DROP TYPE "public"."enum__articles_v_blocks_gallery_advanced_style_layout";
  DROP TYPE "public"."enum__articles_v_blocks_feature_list_style_preset";
  DROP TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_weight";
  DROP TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_tone";
  DROP TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_size";
  DROP TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_align";
  DROP TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_spacing";
  DROP TYPE "public"."enum__articles_v_blocks_feature_list_advanced_style_layout";
  DROP TYPE "public"."enum__articles_v_blocks_metrics_style_preset";
  DROP TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_weight";
  DROP TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_tone";
  DROP TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_size";
  DROP TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_align";
  DROP TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_spacing";
  DROP TYPE "public"."enum__articles_v_blocks_metrics_advanced_style_layout";
  DROP TYPE "public"."enum__articles_v_blocks_callout_tone";
  DROP TYPE "public"."enum__articles_v_blocks_callout_style_preset";
  DROP TYPE "public"."enum__articles_v_blocks_callout_advanced_style_weight";
  DROP TYPE "public"."enum__articles_v_blocks_callout_advanced_style_tone";
  DROP TYPE "public"."enum__articles_v_blocks_callout_advanced_style_size";
  DROP TYPE "public"."enum__articles_v_blocks_callout_advanced_style_align";
  DROP TYPE "public"."enum__articles_v_blocks_callout_advanced_style_spacing";
  DROP TYPE "public"."enum__articles_v_blocks_callout_advanced_style_layout";
  DROP TYPE "public"."enum__articles_v_blocks_quote_style_preset";
  DROP TYPE "public"."enum__articles_v_blocks_quote_advanced_style_weight";
  DROP TYPE "public"."enum__articles_v_blocks_quote_advanced_style_tone";
  DROP TYPE "public"."enum__articles_v_blocks_quote_advanced_style_size";
  DROP TYPE "public"."enum__articles_v_blocks_quote_advanced_style_align";
  DROP TYPE "public"."enum__articles_v_blocks_quote_advanced_style_spacing";
  DROP TYPE "public"."enum__articles_v_blocks_quote_advanced_style_layout";
  DROP TYPE "public"."enum__articles_v_blocks_cta_type";
  DROP TYPE "public"."enum__articles_v_blocks_cta_style_preset";
  DROP TYPE "public"."enum__articles_v_blocks_cta_advanced_style_weight";
  DROP TYPE "public"."enum__articles_v_blocks_cta_advanced_style_tone";
  DROP TYPE "public"."enum__articles_v_blocks_cta_advanced_style_size";
  DROP TYPE "public"."enum__articles_v_blocks_cta_advanced_style_align";
  DROP TYPE "public"."enum__articles_v_blocks_cta_advanced_style_spacing";
  DROP TYPE "public"."enum__articles_v_blocks_cta_advanced_style_layout";
  DROP TYPE "public"."enum__articles_v_version_status";
  DROP TYPE "public"."enum__articles_v_version_destination_type";
  DROP TYPE "public"."enum__articles_v_published_locale";
  DROP TYPE "public"."enum_pages_blocks_body_style_preset";
  DROP TYPE "public"."enum_pages_blocks_body_advanced_style_weight";
  DROP TYPE "public"."enum_pages_blocks_body_advanced_style_tone";
  DROP TYPE "public"."enum_pages_blocks_body_advanced_style_size";
  DROP TYPE "public"."enum_pages_blocks_body_advanced_style_align";
  DROP TYPE "public"."enum_pages_blocks_body_advanced_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_body_advanced_style_layout";
  DROP TYPE "public"."enum_pages_blocks_media_layout_preset";
  DROP TYPE "public"."enum_pages_blocks_media_style_preset";
  DROP TYPE "public"."enum_pages_blocks_media_advanced_style_weight";
  DROP TYPE "public"."enum_pages_blocks_media_advanced_style_tone";
  DROP TYPE "public"."enum_pages_blocks_media_advanced_style_size";
  DROP TYPE "public"."enum_pages_blocks_media_advanced_style_align";
  DROP TYPE "public"."enum_pages_blocks_media_advanced_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_media_advanced_style_layout";
  DROP TYPE "public"."enum_pages_blocks_gallery_layout_preset";
  DROP TYPE "public"."enum_pages_blocks_gallery_style_preset";
  DROP TYPE "public"."enum_pages_blocks_gallery_advanced_style_weight";
  DROP TYPE "public"."enum_pages_blocks_gallery_advanced_style_tone";
  DROP TYPE "public"."enum_pages_blocks_gallery_advanced_style_size";
  DROP TYPE "public"."enum_pages_blocks_gallery_advanced_style_align";
  DROP TYPE "public"."enum_pages_blocks_gallery_advanced_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_gallery_advanced_style_layout";
  DROP TYPE "public"."enum_pages_blocks_feature_list_style_preset";
  DROP TYPE "public"."enum_pages_blocks_feature_list_advanced_style_weight";
  DROP TYPE "public"."enum_pages_blocks_feature_list_advanced_style_tone";
  DROP TYPE "public"."enum_pages_blocks_feature_list_advanced_style_size";
  DROP TYPE "public"."enum_pages_blocks_feature_list_advanced_style_align";
  DROP TYPE "public"."enum_pages_blocks_feature_list_advanced_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_feature_list_advanced_style_layout";
  DROP TYPE "public"."enum_pages_blocks_metrics_style_preset";
  DROP TYPE "public"."enum_pages_blocks_metrics_advanced_style_weight";
  DROP TYPE "public"."enum_pages_blocks_metrics_advanced_style_tone";
  DROP TYPE "public"."enum_pages_blocks_metrics_advanced_style_size";
  DROP TYPE "public"."enum_pages_blocks_metrics_advanced_style_align";
  DROP TYPE "public"."enum_pages_blocks_metrics_advanced_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_metrics_advanced_style_layout";
  DROP TYPE "public"."enum_pages_blocks_callout_tone";
  DROP TYPE "public"."enum_pages_blocks_callout_style_preset";
  DROP TYPE "public"."enum_pages_blocks_callout_advanced_style_weight";
  DROP TYPE "public"."enum_pages_blocks_callout_advanced_style_tone";
  DROP TYPE "public"."enum_pages_blocks_callout_advanced_style_size";
  DROP TYPE "public"."enum_pages_blocks_callout_advanced_style_align";
  DROP TYPE "public"."enum_pages_blocks_callout_advanced_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_callout_advanced_style_layout";
  DROP TYPE "public"."enum_pages_blocks_quote_style_preset";
  DROP TYPE "public"."enum_pages_blocks_quote_advanced_style_weight";
  DROP TYPE "public"."enum_pages_blocks_quote_advanced_style_tone";
  DROP TYPE "public"."enum_pages_blocks_quote_advanced_style_size";
  DROP TYPE "public"."enum_pages_blocks_quote_advanced_style_align";
  DROP TYPE "public"."enum_pages_blocks_quote_advanced_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_quote_advanced_style_layout";
  DROP TYPE "public"."enum_pages_blocks_cta_type";
  DROP TYPE "public"."enum_pages_blocks_cta_style_preset";
  DROP TYPE "public"."enum_pages_blocks_cta_advanced_style_weight";
  DROP TYPE "public"."enum_pages_blocks_cta_advanced_style_tone";
  DROP TYPE "public"."enum_pages_blocks_cta_advanced_style_size";
  DROP TYPE "public"."enum_pages_blocks_cta_advanced_style_align";
  DROP TYPE "public"."enum_pages_blocks_cta_advanced_style_spacing";
  DROP TYPE "public"."enum_pages_blocks_cta_advanced_style_layout";
  DROP TYPE "public"."enum_pages_slug";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum_site_default_locale";
  DROP TYPE "public"."enum_social_links_key";
  DROP TYPE "public"."enum_social_links_cursor_icon";
  DROP TYPE "public"."enum_about_page_copy_intro_contact_line_links";
  DROP TYPE "public"."enum_about_page_copy_gallery_sections_images_cursor_icon";`)
}

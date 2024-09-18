# Generated by Django 3.1.4 on 2020-12-01 07:12

import uuid

import django.contrib.postgres.search
import imagekit.models.fields
from django.db import migrations, models

import files.models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("uid", models.UUIDField(default=uuid.uuid4, unique=True)),
                ("add_date", models.DateTimeField(auto_now_add=True)),
                ("title", models.CharField(db_index=True, max_length=100, unique=True)),
                ("description", models.TextField(blank=True)),
                (
                    "is_global",
                    models.BooleanField(default=False, help_text="global categories or user specific"),
                ),
                (
                    "media_count",
                    models.IntegerField(default=0, help_text="number of media"),
                ),
                (
                    "thumbnail",
                    imagekit.models.fields.ProcessedImageField(blank=True, upload_to=files.models.category_thumb_path),
                ),
                (
                    "listings_thumbnail",
                    models.CharField(
                        blank=True,
                        help_text="Thumbnail to show on listings",
                        max_length=400,
                        null=True,
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Categories",
                "ordering": ["title"],
            },
        ),
        migrations.CreateModel(
            name="Comment",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("add_date", models.DateTimeField(auto_now_add=True)),
                ("text", models.TextField(help_text="text")),
                ("uid", models.UUIDField(default=uuid.uuid4, unique=True)),
                ("lft", models.PositiveIntegerField(editable=False)),
                ("rght", models.PositiveIntegerField(editable=False)),
                ("tree_id", models.PositiveIntegerField(db_index=True, editable=False)),
                ("level", models.PositiveIntegerField(editable=False)),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="EncodeProfile",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=90)),
                (
                    "extension",
                    models.CharField(
                        choices=[("mp4", "mp4"), ("webm", "webm"), ("gif", "gif")],
                        max_length=10,
                    ),
                ),
                (
                    "resolution",
                    models.IntegerField(
                        blank=True,
                        choices=[
                            (2160, "2160"),
                            (1440, "1440"),
                            (1080, "1080"),
                            (720, "720"),
                            (480, "480"),
                            (360, "360"),
                            (240, "240"),
                        ],
                        null=True,
                    ),
                ),
                (
                    "codec",
                    models.CharField(
                        blank=True,
                        choices=[("h265", "h265"), ("h264", "h264"), ("vp9", "vp9")],
                        max_length=10,
                        null=True,
                    ),
                ),
                ("description", models.TextField(blank=True, help_text="description")),
                ("active", models.BooleanField(default=True)),
            ],
            options={
                "ordering": ["resolution"],
            },
        ),
        migrations.CreateModel(
            name="Encoding",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("add_date", models.DateTimeField(auto_now_add=True)),
                ("commands", models.TextField(blank=True, help_text="commands run")),
                (
                    "chunk",
                    models.BooleanField(db_index=True, default=False, help_text="is chunk?"),
                ),
                ("chunk_file_path", models.CharField(blank=True, max_length=400)),
                ("chunks_info", models.TextField(blank=True)),
                ("logs", models.TextField(blank=True)),
                ("md5sum", models.CharField(blank=True, max_length=50, null=True)),
                (
                    "media_file",
                    models.FileField(
                        blank=True,
                        max_length=500,
                        upload_to=files.models.encoding_media_file_path,
                        verbose_name="encoding file",
                    ),
                ),
                ("progress", models.PositiveSmallIntegerField(default=0)),
                ("update_date", models.DateTimeField(auto_now=True)),
                ("retries", models.IntegerField(default=0)),
                ("size", models.CharField(blank=True, max_length=20)),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("pending", "Pending"),
                            ("running", "Running"),
                            ("fail", "Fail"),
                            ("success", "Success"),
                        ],
                        default="pending",
                        max_length=20,
                    ),
                ),
                ("temp_file", models.CharField(blank=True, max_length=400)),
                ("task_id", models.CharField(blank=True, max_length=100)),
                ("total_run_time", models.IntegerField(default=0)),
                ("worker", models.CharField(blank=True, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="Language",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("code", models.CharField(help_text="language code", max_length=12)),
                ("title", models.CharField(help_text="language code", max_length=100)),
            ],
            options={
                "ordering": ["id"],
            },
        ),
        migrations.CreateModel(
            name="License",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=100, unique=True)),
                ("description", models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name="Media",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "add_date",
                    models.DateTimeField(
                        blank=True,
                        db_index=True,
                        null=True,
                        verbose_name="Date produced",
                    ),
                ),
                (
                    "allow_download",
                    models.BooleanField(
                        default=True,
                        help_text="Whether option to download media is shown",
                    ),
                ),
                ("description", models.TextField(blank=True)),
                ("dislikes", models.IntegerField(default=0)),
                ("duration", models.IntegerField(default=0)),
                ("edit_date", models.DateTimeField(auto_now=True)),
                (
                    "enable_comments",
                    models.BooleanField(
                        default=True,
                        help_text="Whether comments will be allowed for this media",
                    ),
                ),
                (
                    "encoding_status",
                    models.CharField(
                        choices=[
                            ("pending", "Pending"),
                            ("running", "Running"),
                            ("fail", "Fail"),
                            ("success", "Success"),
                        ],
                        db_index=True,
                        default="pending",
                        max_length=20,
                    ),
                ),
                (
                    "featured",
                    models.BooleanField(
                        db_index=True,
                        default=False,
                        help_text="Whether media is globally featured by a MediaCMS editor",
                    ),
                ),
                (
                    "friendly_token",
                    models.CharField(
                        blank=True,
                        db_index=True,
                        help_text="Identifier for the Media",
                        max_length=12,
                    ),
                ),
                (
                    "hls_file",
                    models.CharField(
                        blank=True,
                        help_text="Path to HLS file for videos",
                        max_length=1000,
                    ),
                ),
                (
                    "is_reviewed",
                    models.BooleanField(
                        db_index=True,
                        default=True,
                        help_text="Whether media is reviewed, so it can appear on public listings",
                    ),
                ),
                ("likes", models.IntegerField(db_index=True, default=1)),
                (
                    "listable",
                    models.BooleanField(default=False, help_text="Whether it will appear on listings"),
                ),
                (
                    "md5sum",
                    models.CharField(
                        blank=True,
                        help_text="Not exposed, used internally",
                        max_length=50,
                        null=True,
                    ),
                ),
                (
                    "media_file",
                    models.FileField(
                        help_text="media file",
                        max_length=500,
                        upload_to=files.models.original_media_file_path,
                        verbose_name="media file",
                    ),
                ),
                (
                    "media_info",
                    models.TextField(blank=True, help_text="extracted media metadata info"),
                ),
                (
                    "media_type",
                    models.CharField(
                        blank=True,
                        choices=[
                            ("video", "Video"),
                            ("image", "Image"),
                            ("pdf", "Pdf"),
                            ("audio", "Audio"),
                        ],
                        db_index=True,
                        default="video",
                        max_length=20,
                    ),
                ),
                (
                    "password",
                    models.CharField(
                        blank=True,
                        help_text="password for private media",
                        max_length=100,
                    ),
                ),
                (
                    "preview_file_path",
                    models.CharField(
                        blank=True,
                        help_text="preview gif for videos, path in filesystem",
                        max_length=500,
                    ),
                ),
                (
                    "poster",
                    imagekit.models.fields.ProcessedImageField(
                        blank=True,
                        help_text="media extracted big thumbnail, shown on media page",
                        max_length=500,
                        upload_to=files.models.original_thumbnail_file_path,
                    ),
                ),
                (
                    "reported_times",
                    models.IntegerField(default=0, help_text="how many time a Medis is reported"),
                ),
                (
                    "search",
                    django.contrib.postgres.search.SearchVectorField(
                        help_text="used to store all searchable info and metadata for a Media",
                        null=True,
                    ),
                ),
                (
                    "size",
                    models.CharField(
                        blank=True,
                        help_text="media size in bytes, automatically calculated",
                        max_length=20,
                        null=True,
                    ),
                ),
                (
                    "sprites",
                    models.FileField(
                        blank=True,
                        help_text="sprites file, only for videos, displayed on the video player",
                        max_length=500,
                        upload_to=files.models.original_thumbnail_file_path,
                    ),
                ),
                (
                    "state",
                    models.CharField(
                        choices=[
                            ("private", "Private"),
                            ("public", "Public"),
                            ("unlisted", "Unlisted"),
                        ],
                        db_index=True,
                        default="public",
                        help_text="state of Media",
                        max_length=20,
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        blank=True,
                        db_index=True,
                        help_text="media title",
                        max_length=100,
                    ),
                ),
                (
                    "thumbnail",
                    imagekit.models.fields.ProcessedImageField(
                        blank=True,
                        help_text="media extracted small thumbnail, shown on listings",
                        max_length=500,
                        upload_to=files.models.original_thumbnail_file_path,
                    ),
                ),
                (
                    "thumbnail_time",
                    models.FloatField(
                        blank=True,
                        help_text="Time on video that a thumbnail will be taken",
                        null=True,
                    ),
                ),
                (
                    "uid",
                    models.UUIDField(
                        default=uuid.uuid4,
                        help_text="A unique identifier for the Media",
                        unique=True,
                    ),
                ),
                (
                    "uploaded_thumbnail",
                    imagekit.models.fields.ProcessedImageField(
                        blank=True,
                        help_text="thumbnail from uploaded_poster field",
                        max_length=500,
                        upload_to=files.models.original_thumbnail_file_path,
                    ),
                ),
                (
                    "uploaded_poster",
                    imagekit.models.fields.ProcessedImageField(
                        blank=True,
                        help_text="This image will characterize the media",
                        max_length=500,
                        upload_to=files.models.original_thumbnail_file_path,
                        verbose_name="Upload image",
                    ),
                ),
                (
                    "user_featured",
                    models.BooleanField(default=False, help_text="تایبەتمەند by the user"),
                ),
                ("video_height", models.IntegerField(default=1)),
                ("views", models.IntegerField(db_index=True, default=1)),
            ],
            options={
                "ordering": ["-add_date"],
            },
        ),
        migrations.CreateModel(
            name="Playlist",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("add_date", models.DateTimeField(auto_now_add=True, db_index=True)),
                ("description", models.TextField(blank=True, help_text="description")),
                (
                    "friendly_token",
                    models.CharField(blank=True, db_index=True, max_length=12),
                ),
                ("title", models.CharField(db_index=True, max_length=100)),
                ("uid", models.UUIDField(default=uuid.uuid4, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="PlaylistMedia",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("action_date", models.DateTimeField(auto_now=True)),
                ("ordering", models.IntegerField(default=1)),
            ],
            options={
                "ordering": ["ordering", "-action_date"],
            },
        ),
        migrations.CreateModel(
            name="Rating",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("add_date", models.DateTimeField(auto_now_add=True)),
                (
                    "score",
                    models.IntegerField(validators=[files.models.validate_rating]),
                ),
            ],
            options={
                "verbose_name_plural": "Ratings",
            },
        ),
        migrations.CreateModel(
            name="RatingCategory",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("description", models.TextField(blank=True)),
                ("enabled", models.BooleanField(default=True)),
                ("title", models.CharField(db_index=True, max_length=200, unique=True)),
            ],
            options={
                "verbose_name_plural": "Rating Categories",
            },
        ),
        migrations.CreateModel(
            name="Subtitle",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "subtitle_file",
                    models.FileField(
                        help_text="File has to be WebVTT format",
                        max_length=500,
                        upload_to=files.models.subtitles_file_path,
                        verbose_name="Subtitle/CC file",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Tag",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(db_index=True, max_length=100, unique=True)),
                (
                    "media_count",
                    models.IntegerField(default=0, help_text="number of media"),
                ),
                (
                    "listings_thumbnail",
                    models.CharField(
                        blank=True,
                        db_index=True,
                        help_text="Thumbnail to show on listings",
                        max_length=400,
                        null=True,
                    ),
                ),
            ],
            options={
                "ordering": ["title"],
            },
        ),
    ]

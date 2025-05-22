---
id: media
title: Media
lang: en
nav_order: 10
---

# Media

A **<span class="aq-icon outline">aspect_ratio</span> Media** is here to display medias like images, videos, 3D files, PDF or sound.

You can add draws and annotations on medias to give feedbacks or to highlight specific parts.

## Format

Aquarium is compatible with a variety of formats:

- **Image**: PNG, JPG, JPEG, GIF, ...
- **Video**: MP4, MOV, AVI, WEBM, ...
- **Audio**: MP3, WAV, OGG, ...
- **3D**: .GLTF, .GLTB, .mview ([Marmoset Toolbag](https://marmoset.co/)) and [Sketchfab](https://sketchfab.com/).

To upload a file, just drag and drop it in Aquarium and let Aquarium do the rest for you.

### Upload a 3D file

You can export .GLTF and .GLTB files using modern 3D DCC software like [Blender](https://www.blender.org/). You can also use the online converter like [Convert 3d](https://convert3d.org/) to convert a 3D file (like .fbx for example) to .GLTF.

For Sketchfab, you just have to drag and drop the URL of the 3D model in Aquarium.
For the Marmoset Toolbag .mview file, you can use drop the file in Aquarium like any other file type.

We will show you a preview of your 3D model before uploading it.

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the media |
| `description` | `string` | Description of the media |
| `duration` | `number` | Duration of the media in seconds |
| `encodingProgress` | `number` | Progress of the encoding process |
| `encodingStatus` | `string` | Status of the encoding process |
| `extension` | `string` | File extension of the media |
| `filename` | `string` | Filename of the media |
| `framerate` | `string` | Framerate of the media |
| `mimetype` | `string` | MIME type of the media |
| `nbframes` | `number` | Number of frames in the media |
| `originalname` | `string` | Original name of the media file |
| `path` | `string` | Path to the media file |
| `screenshot` | `string` | Path to the screenshot of the media |
| `size` | `number` | Size of the media file in bytes |
| `thumbnail` | `string` | Path to the thumbnail of the media |
| `url` | `string` | URL to access the media file |
| `height` | `number` | Height of the media in pixels |
| `width` | `number` | Width of the media in pixels |
| `bitrate` | `number` | Bitrate of the media in bits per second |
| `codecName` | `string` | Name of the codec used for the media |
| `codecType` | `string` | Type of the codec used for the media |
| `aspectRatio` | `string` | Aspect ratio of the media |
| `timecode` | `string` | Timecode of the media |

## Structure

```mermaid
graph LR
  Media -->|Child| Comment
```


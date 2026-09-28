Personal research website

This starter adapts the [Aerial Robotics Group website](https://github.com/AerialRoboticsGroup/aerialroboticsgroup.github.io), built on [al-folio](https://github.com/alshedivat/al-folio). The layout, typography, project cards, and dark/light switch are included. The original MIT license is preserved in `LICENSE`.

## What to edit later

| Purpose | File or folder |
| --- | --- |
| Home page, portrait caption | `_pages/about.md` |
| Project cards and details | `_projects/*.md` |
| Projects listing and navigation | `_pages/projects.md` |
| Publications | `_pages/publications.md`, `_bibliography/papers.bib` |
| News, if enabled | `_news/*.md` |
| Portrait and project images | `assets/img/` (replace `portrait.jpg` or add project images) |
| Name, address, theme toggles, SEO | `_config.yml` |
| Social links | `_data/socials.yml` |

To add an image to a project card, add `img: assets/img/your-image.jpg` to that project's front matter. The default view is dark for a new visitor; the upstream light/dark toggle remains functional.

The framework lives in `_layouts/`, `_includes/`, `_sass/`, `assets/css/`, and `assets/js/`. Once published, normal updates need only Markdown, image, and occasional config edits.

## Notes

- The upstream build depends on Jekyll plugins and therefore uses the included GitHub Actions workflow. GitHub Pages' simple branch-based Jekyll build is insufficient for this site.
- This package has been checked for paths and configuration syntax, but its full Ruby build could not be run in the preparation environment. Inspect the first GitHub Actions run for any dependency errors.

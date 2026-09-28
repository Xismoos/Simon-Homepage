# Šimon Prokop — personal research website

This starter adapts the [Aerial Robotics Group website](https://github.com/AerialRoboticsGroup/aerialroboticsgroup.github.io), built on [al-folio](https://github.com/alshedivat/al-folio). The layout, typography, project cards, and dark/light switch are included. The group-specific photographs, logos, and publication records are removed. The original MIT license is preserved in `LICENSE`.

## Publish

This is a **complete replacement** for the files in your current `Xismoos/simon.prokop.github.io` repository; do not paste these files on top of Minimal Light or Midnight. Before replacing the live repository, use a separate temporary GitHub repository to preview if desired. Upload all files, including `.github/workflows/deploy.yml` and hidden files.

In GitHub **Settings → Pages**, select **Deploy from a branch** and then **gh-pages / (root)**. The supplied GitHub Actions workflow builds this site from the `main` branch and publishes its output to `gh-pages`. The first build installs Ruby and Python dependencies and can take several minutes. If the `gh-pages` branch is not available yet, wait for the first successful **Deploy site** run under Actions, then select it.

This starter targets `https://xismoos.github.io/simon.prokop.github.io/`. If you rename the repository to `Xismoos.github.io`, set `baseurl:` to blank in `_config.yml`.

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

- Existing group photographs, logos, video, sample papers, and CV have deliberately been excluded. Add only your own material.
- The upstream build depends on Jekyll plugins and therefore uses the included GitHub Actions workflow. GitHub Pages' simple branch-based Jekyll build is insufficient for this site.
- This package has been checked for paths and configuration syntax, but its full Ruby build could not be run in the preparation environment. Inspect the first GitHub Actions run for any dependency errors.

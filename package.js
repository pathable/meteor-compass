Package.describe({
  name: "pathable:compass",
  summary:
    "Stylesheet Authoring Environment that makes your website design simpler",
  version: "1.0.0",
  git: "https://github.com/pathable/meteor-compass"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.8");

  api.use(["meteor", "fourseven:scss@4.10.0"]);

  api.addFiles(
    [
      "_compass.scss",
      "_lemonade.scss",
      "compass/_css3.scss",
      "compass/_layout.scss",
      "compass/_reset-legacy.scss",
      "compass/_reset.scss",
      "compass/_support.scss",
      "compass/_typography.scss",
      "compass/_utilities.scss",
      "compass/css3/_animation.scss",
      "compass/css3/_appearance.scss",
      "compass/css3/_background-clip.scss",
      "compass/css3/_background-origin.scss",
      "compass/css3/_background-size.scss",
      "compass/css3/_border-radius.scss",
      "compass/css3/_box.scss",
      "compass/css3/_box-shadow.scss",
      "compass/css3/_box-sizing.scss",
      "compass/css3/_columns.scss",
      "compass/css3/_filter.scss",
      "compass/css3/_font-face.scss",
      "compass/css3/_hyphenation.scss",
      "compass/css3/_images.scss",
      "compass/css3/_inline-block.scss",
      "compass/css3/_opacity.scss",
      "compass/css3/_pie.scss",
      "compass/css3/_regions.scss",
      "compass/css3/_selection.scss",
      "compass/css3/_shared.scss",
      "compass/css3/_text-shadow.scss",
      "compass/css3/_transform.scss",
      "compass/css3/_transform-legacy.scss",
      "compass/css3/_transition.scss",
      "compass/css3/_user-interface.scss",
      "compass/layout/_grid-background.scss",
      "compass/layout/_sticky-footer.scss",
      "compass/layout/_stretching.scss",
      "compass/reset/_utilities-legacy.scss",
      "compass/reset/_utilities.scss",
      "compass/typography/_links.scss",
      "compass/typography/links/_hover-link.scss",
      "compass/typography/links/_link-colors.scss",
      "compass/typography/links/_unstyled-link.scss",
      "compass/typography/_lists.scss",
      "compass/typography/lists/_bullets.scss",
      "compass/typography/lists/_horizontal-list.scss",
      "compass/typography/lists/_inline-block-list.scss",
      "compass/typography/lists/_inline-list.scss",
      "compass/typography/_text.scss",
      "compass/typography/text/_ellipsis.scss",
      "compass/typography/text/_force-wrap.scss",
      "compass/typography/text/_nowrap.scss",
      "compass/typography/text/_replacement.scss",
      "compass/typography/_units.scss",
      "compass/typography/_vertical_rhythm.scss",
      "compass/utilities/_color.scss",
      "compass/utilities/color/_contrast.scss",
      "compass/utilities/_general.scss",
      "compass/utilities/_links.scss",
      "compass/utilities/_lists.scss",
      "compass/utilities/_print.scss",
      "compass/utilities/_sprites.scss",
      "compass/utilities/_tables.scss",
      "compass/utilities/_text.scss",
      "compass/utilities/general/_clearfix.scss",
      "compass/utilities/general/_float.scss",
      "compass/utilities/general/_hacks.scss",
      "compass/utilities/general/_min.scss",
      "compass/utilities/general/_reset.scss",
      "compass/utilities/general/_tabs.scss",
      "compass/utilities/general/_tag-cloud.scss",
      "compass/utilities/links/_hover-link.scss",
      "compass/utilities/links/_link-colors.scss",
      "compass/utilities/links/_unstyled-link.scss",
      "compass/utilities/lists/_bullets.scss",
      "compass/utilities/lists/_horizontal-list.scss",
      "compass/utilities/lists/_inline-block-list.scss",
      "compass/utilities/lists/_inline-list.scss",
      "compass/utilities/sprites/_base.scss",
      "compass/utilities/sprites/_sprite-img.scss",
      "compass/utilities/tables/_alternating-rows-and-columns.scss",
      "compass/utilities/tables/_borders.scss",
      "compass/utilities/tables/_scaffolding.scss",
      "compass/utilities/text/_ellipsis.scss",
      "compass/utilities/text/_nowrap.scss",
      "compass/utilities/text/_replacement.scss"
    ],
    "client",
    { isImport: true }
  );
});

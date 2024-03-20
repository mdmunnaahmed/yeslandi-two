var videoItem = $(".video-pop");
if (videoItem) {
  videoItem.magnificPopup({
    type: "iframe",
  });
}

var imageItem = $(".image-pop");
if (imageItem) {
  imageItem.magnificPopup({
    type: "image",
  });
}
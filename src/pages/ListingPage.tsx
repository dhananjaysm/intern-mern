import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import React from "react";
// Import required actions and qualifiers.
// import { fill } from "@cloudinary/url-gen/actions/resize";
// import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
// import { Gravity } from "@cloudinary/url-gen/qualifiers";
// import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
// import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { scale } from "@cloudinary/url-gen/actions/resize";
interface ListingPageProps {}

const myCld = new Cloudinary({
  cloud: {
    cloudName: "dbqaol75q",
  },
});

export const ListingPage: React.FC<ListingPageProps> = ({}) => {
  let img = myCld.image("mediaAPI/cover_fahrbf");
  img.resize(scale().width(400));
  let vid = myCld.video("mediaAPI/nehru");
  //   vid
  //     .resize(
  //       fill()
  //         .width(150)
  //         .height(150)
  //         .gravity(
  //           Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
  //         )
  //     ) // Crop the video, focusing on the faces.
  //     .roundCorners(byRadius(20)); // Round the corners.
  // Scale the video to a width of 400 pixels.
  vid.resize(scale().width(400));

  return (
    <>
      <AdvancedImage cldImg={img} />
      <div>
        <AdvancedVideo cldVid={vid} id="zero" controls autoPlay loop muted />
      </div>
    </>
  );
};

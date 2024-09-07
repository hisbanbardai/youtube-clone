import ChannelInfo from "../../components/ChannelInfo/ChannelInfo";
import Comments from "../../components/Comments/Comments";
import SuggestedVideos from "../../components/SuggestedVideos/SuggestedVideos";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./Video.css";

export default function Video() {
  return (
    <div className="video-container">
      <VideoPlayer />
      <SuggestedVideos />
      <VideoDetails />
      <ChannelInfo />
      <Comments />
    </div>
  );
}

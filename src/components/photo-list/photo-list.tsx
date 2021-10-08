import React from "react";
import { createApi } from "unsplash-js";
import "./photo-list.css";

interface State {
  photos: any[];
}
interface Props {}

class PhotoListComponent extends React.Component<Props, State> {
  ACCESS_KEY: any = process.env.REACT_APP_API_ACCESS_KEY2;
  constructor(props: Props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  getPhotos() {
    const unsplash = createApi({
      accessKey: this.ACCESS_KEY,
    });

    unsplash.photos.getRandom({ count: 20 }).then((response) => {
      const data: any = response.response;
      const photosData = data?.map((obj: any) => {
        return { id: obj.id, alt: obj.alt_description, url: obj.urls.regular };
      });
      this.setState({
        photos: photosData,
      });
    });
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    return (
      <>
        <div className="card-list">
          {this.state.photos.map((photo) => (
            <div className="card" key={photo.id}>
              <img
                className="card--image"
                src={photo.url}
                width="100%"
                height="100%"
                alt={photo.alt || "Foto"}
              ></img>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default PhotoListComponent;

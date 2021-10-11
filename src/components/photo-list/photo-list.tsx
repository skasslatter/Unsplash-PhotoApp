import React from "react";
import { Link } from "react-router-dom";
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
      this.setState({
        photos: data,
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
            <Link to={`/photos/${photo.id}`} key={photo.id}>
              <div className="card">
                <img
                  className="card--image"
                  src={photo.urls.regular}
                  width="100%"
                  height="100%"
                  alt={photo.alt_description || "Foto"}
                ></img>
                <div className="card--footer">
                  <img
                    src={photo.user.profile_image.small}
                    alt="Profile"
                    className="media--obj"
                  />
                  <p className="media--body">{photo.user.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default PhotoListComponent;

import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { createApi } from "unsplash-js";
import "./photo-detail.css";

interface State {
  photo: any;
  isLoading: boolean;
}
interface RouteParams {
  id: string;
}

interface Props extends RouteComponentProps<RouteParams> {}

class PhotoDetailComponent extends React.Component<Props, State> {
  ACCESS_KEY: any = process.env.REACT_APP_API_ACCESS_KEY2;

  constructor(props: Props) {
    super(props);
    this.state = {
      photo: {},
      isLoading: true,
    };
  }

  getPhotoData() {
    const { id } = this.props.match.params;
    const unsplash = createApi({
      accessKey: this.ACCESS_KEY,
    });

    unsplash.photos.get({ photoId: id }).then((response) => {
      const data = response.response;
      this.setState({
        photo: data,
        isLoading: false,
      });
    });
  }

  componentDidMount() {
    this.getPhotoData();
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <h1> Loading </h1>
        ) : (
          <>
            <div className="img--wrapper">
              <img
                src={this.state.photo.urls.regular}
                width="100%"
                height="100%"
                alt={this.state.photo.alt_description || "Foto"}
              ></img>
            </div>
            <div className="infos">
              <div className="author">
                <img
                  src={this.state.photo.user.profile_image.small}
                  alt="Profile"
                  className="author--img"
                />
                <p className="author--name">{this.state.photo.user.name}</p>
              </div>
              <p>Description {this.state.photo.description}</p>
              <p>Views {this.state.photo.views}</p>
              <p>Downloads {this.state.photo.downloads}</p>
              <p>Likes {this.state.photo.likes}</p>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(PhotoDetailComponent);

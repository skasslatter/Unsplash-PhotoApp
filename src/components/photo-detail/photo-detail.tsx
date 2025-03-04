import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { createApi } from "unsplash-js";
import { BackButtonComponent } from "../back-button/back-button";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner";
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
  ACCESS_KEY: any = process.env.REACT_APP_API_ACCESS_KEY;

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
        <BackButtonComponent />
        {this.state.isLoading ? (
          <>
           <LoadingSpinnerComponent/>
          </>
        ) : (
          <>
            <div className="wrapper">
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
                {this.state.photo.description && (
                  <div>
                    {this.state.photo.description}
                  </div>
                )}
                <h5>Views</h5>
                <div>{this.state.photo.views}</div>
                <h5>Downloads</h5>
                <div>{this.state.photo.downloads}</div>
                <h5>Likes</h5>
                <div>{this.state.photo.likes}</div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(PhotoDetailComponent);

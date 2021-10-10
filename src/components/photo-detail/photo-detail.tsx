import React from "react";
import { RouteComponentProps, useParams, withRouter } from "react-router-dom";
import { createApi } from "unsplash-js";

interface State {
  photo: any[];
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
      photo: [],
    };
  }

  getPhotoData() {
    const { id } = this.props.match.params;
    const unsplash = createApi({
      accessKey: this.ACCESS_KEY,
    });

    unsplash.photos.get({ photoId: id }).then((response) => {
      const data: any = response.response;
      console.log("data", data);
      this.setState({
        photo: data,
      });
    });
  }

  componentDidMount() {
    this.getPhotoData();
  }

  render() {
    return (
      <>
        <h1>Hello, you are seeing a photo detail</h1>
      </>
    );
  }
}

export default withRouter(PhotoDetailComponent);

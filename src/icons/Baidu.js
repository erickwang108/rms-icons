import React from 'react';
import PropTypes from 'prop-types';

class Baidu extends React.Component {
  static propTypes = {
    innerColor: PropTypes.string,
    outerColor: PropTypes.string,
    fontSize: PropTypes.string,
    title: PropTypes.node,
  };

  static defaultProps = {
    innerColor: '#ffffff',
    outerColor: '#9900E6',
    fontSize: '20px',
  };

  render() {
    const {
      innerColor,
      fontSize,
      outerColor,
      title = '',
    } = this.props;

    return (
      <svg width="1em" height="1em" viewBox="0 0 20 20" fontSize={fontSize}>
        <title>{title}</title>
        <path
          fill={outerColor}
          d="M4.509 10.481c1.937-.416 1.673-2.734 1.616-3.24-.095-.782-1.014-2.146-2.26-2.037-1.569.14-1.798 2.406-1.798 2.406-.212 1.049.508 3.288 2.442 2.871m3.598-3.886c1.07 0 1.934-1.232 1.934-2.755 0-1.522-.865-2.753-1.934-2.753-1.07 0-1.937 1.23-1.937 2.753 0 1.523.867 2.755 1.937 2.755m4.611.182c1.431.187 2.349-1.34 2.532-2.497.188-1.156-.737-2.5-1.748-2.731-1.016-.234-2.284 1.392-2.398 2.453-.14 1.298.184 2.591 1.614 2.775m5.67 1.944c0-.554-.459-2.222-2.165-2.222-1.71 0-1.937 1.574-1.937 2.687 0 1.062.09 2.543 2.212 2.497 2.122-.047 1.89-2.405 1.89-2.962m-2.165 4.859s-2.213-1.712-3.505-3.563c-1.754-2.73-4.243-1.618-5.075-.232-.829 1.39-2.119 2.267-2.303 2.5-.186.228-2.673 1.572-2.121 4.025.553 2.452 2.492 2.405 2.492 2.405s1.43.14 3.086-.23c1.661-.37 3.09.09 3.09.09s3.875 1.3 4.934-1.2c1.06-2.498-.598-3.795-.598-3.795"
        />
        <path
          d="M8.45 11.193v1.647H7.11s-1.342.111-1.811 1.632c-.164 1.014.144 1.613.198 1.74.054.128.488.87 1.576 1.088H9.59V11.21l-1.14-.018zm-.02 5.108H7.416s-.707-.037-.922-.851c-.111-.361.017-.777.072-.94.052-.165.29-.544.778-.69H8.43v2.48zM10.208 12.988v3.206s.052.798 1.177 1.089h2.898v-4.295h-1.25v3.224h-1.194s-.382-.055-.454-.362v-2.881l-1.177.019"
          fill={innerColor}
          fillRule="nonzero"
        />
      </svg>
    );
  }
}

export default Baidu;

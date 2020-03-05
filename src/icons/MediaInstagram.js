import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function MediaInstagram(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M12.121 12.121A2.89 2.89 0 0 0 13 10a2.89 2.89 0 0 0-.879-2.121A2.89 2.89 0 0 0 10 7a2.89 2.89 0 0 0-2.121.879A2.89 2.89 0 0 0 7 10c0 .828.293 1.535.879 2.121A2.89 2.89 0 0 0 10 13a2.89 2.89 0 0 0 2.121-.879zm1.149-5.39c.898.898 1.347 1.988 1.347 3.269 0 1.281-.449 2.371-1.347 3.27-.899.898-1.989 1.347-3.27 1.347s-2.371-.449-3.27-1.347C5.832 12.37 5.383 11.28 5.383 10s.449-2.371 1.347-3.27C7.63 5.832 8.72 5.383 10 5.383s2.371.449 3.27 1.347zm2.296-2.297c.211.21.317.464.317.761s-.106.551-.317.762c-.21.211-.464.316-.761.316s-.551-.105-.762-.316a1.038 1.038 0 0 1-.316-.762c0-.297.105-.55.316-.761.21-.211.465-.317.762-.317s.55.106.761.317zm-4.675-1.817H10l-.896-.006a63.574 63.574 0 0 0-1.237 0c-.281.004-.658.016-1.13.035-.473.02-.876.06-1.208.118-.332.058-.611.13-.838.216a3.04 3.04 0 0 0-1.03.68 3.04 3.04 0 0 0-.68 1.031 4.699 4.699 0 0 0-.217.838 9.287 9.287 0 0 0-.118 1.207c-.019.473-.03.85-.035 1.131-.004.281-.004.694 0 1.237l.006.896-.006.896c-.004.543-.004.956 0 1.237.004.281.016.658.035 1.13.02.473.06.876.118 1.208.058.332.13.611.216.838.157.39.383.734.68 1.03.297.298.64.524 1.031.68.227.086.506.159.838.217.332.059.735.098 1.207.118.473.019.85.03 1.131.035.281.004.694.004 1.237 0l.896-.006.896.006c.543.004.956.004 1.237 0 .281-.004.658-.016 1.13-.035.473-.02.876-.06 1.208-.118.332-.058.611-.13.838-.216a3.04 3.04 0 0 0 1.03-.68 3.04 3.04 0 0 0 .68-1.031c.086-.227.159-.506.217-.838.059-.332.098-.735.118-1.207.019-.473.03-.85.035-1.131.004-.281.004-.694 0-1.237L17.383 10l.006-.896c.004-.543.004-.956 0-1.237a43.414 43.414 0 0 0-.035-1.13 9.287 9.287 0 0 0-.118-1.208 4.699 4.699 0 0 0-.216-.838 3.04 3.04 0 0 0-.68-1.03 3.04 3.04 0 0 0-1.031-.68 4.699 4.699 0 0 0-.838-.217 9.287 9.287 0 0 0-1.207-.118c-.473-.019-.85-.03-1.131-.035a47.884 47.884 0 0 0-1.242.006zm8.05 3.668c.04.688.059 1.926.059 3.715 0 1.79-.02 3.027-.059 3.715-.078 1.625-.562 2.883-1.453 3.773-.89.89-2.148 1.375-3.773 1.453-.688.04-1.926.059-3.715.059-1.79 0-3.027-.02-3.715-.059-1.625-.078-2.883-.562-3.773-1.453-.89-.89-1.375-2.148-1.453-3.773C1.019 13.027 1 11.789 1 10c0-1.79.02-3.027.059-3.715.078-1.625.562-2.883 1.453-3.773.89-.89 2.148-1.375 3.773-1.453C6.973 1.019 8.211 1 10 1c1.79 0 3.027.02 3.715.059 1.625.078 2.883.562 3.773 1.453.89.89 1.375 2.148 1.453 3.773z" />
    </Wrapper>
  );
}

MediaInstagram.propTypes = PROP_TYPES;
MediaInstagram.defaultProps = DEFAULT_PROPS;

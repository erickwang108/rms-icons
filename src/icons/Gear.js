import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Gear(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M12.121 12.121A2.89 2.89 0 0 0 13 10a2.89 2.89 0 0 0-.879-2.121A2.89 2.89 0 0 0 10 7a2.89 2.89 0 0 0-2.121.879A2.89 2.89 0 0 0 7 10c0 .828.293 1.535.879 2.121A2.89 2.89 0 0 0 10 13a2.89 2.89 0 0 0 2.121-.879zM19 8.723v2.601a.452.452 0 0 1-.094.27.357.357 0 0 1-.234.152l-2.168.328c-.149.422-.3.778-.457 1.067.273.39.691.93 1.254 1.617a.453.453 0 0 1 .117.293.391.391 0 0 1-.105.27c-.211.288-.598.71-1.16 1.265-.563.555-.93.832-1.102.832a.572.572 0 0 1-.305-.105l-1.617-1.266c-.344.18-.7.328-1.066.445-.126 1.063-.239 1.79-.34 2.18-.055.219-.196.328-.422.328H8.699a.443.443 0 0 1-.287-.1.347.347 0 0 1-.135-.252l-.328-2.156a7.243 7.243 0 0 1-1.054-.433l-1.653 1.253a.422.422 0 0 1-.293.106.404.404 0 0 1-.293-.129c-.984-.89-1.629-1.547-1.933-1.969a.458.458 0 0 1 .011-.539c.118-.164.317-.424.598-.779.281-.356.492-.63.633-.826a5.798 5.798 0 0 1-.48-1.16l-2.145-.317a.37.37 0 0 1-.246-.146.443.443 0 0 1-.094-.276V8.676c0-.094.031-.184.094-.27a.353.353 0 0 1 .222-.152l2.18-.328c.11-.36.262-.719.457-1.078-.312-.446-.73-.985-1.254-1.618a.44.44 0 0 1-.117-.28c0-.079.035-.169.106-.27.203-.282.587-.701 1.154-1.26.566-.559.935-.838 1.107-.838.102 0 .203.04.305.117L6.87 3.953c.344-.18.7-.328 1.066-.445.126-1.063.239-1.79.34-2.18C8.332 1.11 8.473 1 8.7 1h2.602c.11 0 .205.033.287.1.082.066.127.15.135.252l.328 2.156c.383.125.734.27 1.054.433l1.665-1.253a.38.38 0 0 1 .28-.106c.102 0 .2.04.294.117 1.008.93 1.652 1.594 1.933 1.992a.378.378 0 0 1 .082.258.452.452 0 0 1-.093.27c-.118.164-.317.424-.598.779-.281.356-.492.63-.633.826.203.39.363.774.48 1.149l2.145.328a.37.37 0 0 1 .246.146.443.443 0 0 1 .094.276z" />
    </Wrapper>
  );
}

Gear.propTypes = PROP_TYPES;
Gear.defaultProps = DEFAULT_PROPS;

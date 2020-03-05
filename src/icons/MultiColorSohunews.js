import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function MultiColorSohuNews(props) {
  return (
    <Wrapper {...props}>
      <linearGradient x1="51.421%" y1="0%" x2="51.421%" y2="100%" id="a">
        <stop stopColor="#F5EA75" offset="0%" /><stop stopColor="#F3AB00" offset="100%" />
      </linearGradient>
      <linearGradient x1="46.873%" y1="4.495%" x2="27.948%" y2="59.188%" id="b"><stop stopColor="#AC1500" offset="0%" />
        <stop stopColor="#F75841" offset="81.702%" /><stop stopColor="#FF472C" offset="100%" />
      </linearGradient>
      <linearGradient x1="4.936%" y1="15.133%" x2="95.838%" y2="88.152%" id="c">
        <stop stopColor="#431701" offset="0%" />
        <stop stopColor="#1D0800" offset="100%" />
      </linearGradient>
      <g fill="none" fillRule="evenodd">
        <rect fill="url(#a)" fillRule="nonzero" x="1" y="1" width="18" height="18" rx="2.8" />
        <path d="M10.382 15.449a11.97 11.97 0 0 0-.344-.114 8.687 8.687 0 0 1-1.677-.807c-.224-.143-.568-.43-.985-.81-1.09-.996-1.807-1.579-2.6-2.103-1.292-.859-2.35-1.262-3.31-1.262-.537 0-.945.104-1.326.338l-.14.085V9.575c0-1.78.04-1.93.665-2.516.548-.517.807-.664 1.57-.99.764-.325.947-.466 2.607-.45 1.18.01 1.618.193 2.534.45.648.183 1.578.536 2.727 1.158 1.57.853 2.874 1.518 4.146 1.614 1.225.092 1.899-.282 2.6-.46.11-.03.268-.06.344-.062l.14-.01.064.166c.194.498.27.924.297 1.617.037 1.016-.106 1.77-.477 2.539-.795 1.633-2.582 2.821-4.533 3.01-.194.02-.224.03-.207.075.013.032-.866-.052-.99-.072a.446.446 0 0 0-.15-.01c-.01.007-.951-.185-.955-.185z" fill="url(#b)" transform="matrix(1 0 0 -1 1 24.341)" />
        <path d="M7.996 7.151c.64-.123 1.137-.183 1.487-.178.351.005.87.078 1.56.219-.66.205-1.121.407-1.383.607-.261.2-.57.587-.926 1.158.77-.092 1.331-.131 1.684-.119.352.013.76.088 1.221.226-.62.295-1.06.566-1.318.812-.259.247-.538.662-.838 1.247.51-.004.886.015 1.132.058.245.043.587.15 1.024.319-.576.385-.954.726-1.135 1.023-.18.298-.292.82-.334 1.565 1.768-.948 3.098-1.47 3.991-1.565.893-.095 1.974.138 3.242.7a7.582 7.582 0 0 0 .3-3.347c-.224-1.738-2.438-3.483-3.186-3.776-.749-.293-1.835-.699-3.693-.33-1.238.244-2.181.705-2.828 1.381z" fill="url(#c)" fillRule="nonzero" transform="translate(1 3)" />
        <g fill="#481C07">
          <path d="M6.503 3.06c-.095.047-.122.08-.143.19-.024.131.007.663.075 1.389.085.896.024 1.02-.554 1.11-.333.05-.37.024-.356-.237l.01-.188.16-.023c.39-.054.618-.184.58-.328-.023-.083-.064-.097-.438-.12l-.32-.024-.064-.143c-.074-.168-.204-.265-.309-.231-.136.043-.17.204-.17.82 0 .685.017.735.292.859.18.08.204.083.612.06.475-.027.598 0 .676.15.047.09.044.094-.092.154-.173.077-.238.174-.224.338l.01.127h.832l.085.1c.065.077.082.141.085.278 0 .167-.01.187-.173.361-.122.124-.204.18-.262.18-.054 0-.217-.106-.468-.303-.503-.395-.816-.6-.914-.6-.187 0-.35.131-.302.245.01.027.156.117.322.207.17.087.316.184.326.214.014.03.102.164.204.301.2.275.224.395.106.506-.15.133-.663.274-1.19.32l-.264.024-.034.117c-.058.21.105.452.336.488.234.037.493-.046.93-.294.079-.043.211-.1.296-.12a.723.723 0 0 0 .272-.15c.132-.125.262-.185.4-.185.113 0 .371.114.47.204.037.034.163.1.278.144.116.047.323.15.465.237.47.288.867.372 1.064.228.18-.13.214-.448.071-.626-.05-.063-.112-.086-.262-.103a.99.99 0 0 1-.298-.087.57.57 0 0 0-.279-.064c-.095 0-.177-.013-.183-.03-.02-.053-.432-.237-.534-.237-.125 0-.207-.077-.207-.198 0-.073.04-.13.184-.25.118-.097.2-.201.227-.278.048-.14.024-.549-.037-.686-.044-.093-.612-.428-.734-.428-.119 0-.217-.04-.217-.087 0-.026.05-.093.112-.15.102-.097.119-.104.295-.084.102.01.31.027.459.04l.272.02.237-.147c.37-.227.38-.247.408-.973a6.482 6.482 0 0 0 0-.753c-.037-.234-.18-.384-.51-.545-.254-.123-.322-.143-.523-.143-.271-.004-.343.04-.343.2 0 .167.089.234.377.281.49.077.455.05.466.328l.01.24h-.167c-.22 0-.55.06-.642.121-.105.067-.098.167.017.228.099.05.56.153.687.153.064 0 .067.014.05.174-.013.097-.04.188-.06.2-.082.051-.374.095-.612.095-.245 0-.251-.004-.377-.13l-.133-.135.02-.478c.014-.264.035-.772.045-1.134l.024-.652-.095-.073c-.113-.09-.2-.094-.357-.014zM12.458 3.234c-.062.037-.112.087-.112.114 0 .027-.01.07-.02.1-.014.034.02.087.087.147l.106.097-.068.198c-.136.38-.21.37-.445-.057-.18-.328-.252-.378-.476-.328a.902.902 0 0 0-.227.084c-.163.103-.055.431.234.729.15.15.163.18.163.324v.16l-.34.175c-.652.337-.754.578-.292.702.112.03.153.023.313-.054.102-.05.21-.123.238-.167.06-.093.261-.217.353-.217.047 0 .064.033.078.14.01.08.03.221.04.318.025.164.021.18-.135.405-.224.334-.404.498-.761.705-.17.097-.326.211-.346.245-.045.08.017.25.101.274.269.077.344.087.432.053.153-.057.72-.625.747-.749.051-.24.163-.25.214-.02.061.281.048.585-.034.743-.061.12-.068.17-.047.38.013.135.013.275 0 .315-.02.067-.252.234-.323.234a.565.565 0 0 1-.173-.107.509.509 0 0 0-.316-.12c-.17-.014-.187-.007-.241.073-.085.124-.028.315.122.402a.5.5 0 0 1 .17.21.824.824 0 0 1 .057.158c-.006.003 1.87-.108 1.915-.282.146-.555.575-1.655.596-2.213l.02-.525-.122-.245a1.613 1.613 0 0 1-.167-.558l-.04-.314.166-.148c.255-.22.4-.277.703-.277.18 0 .306-.02.411-.064.092-.04.347-.087.625-.12.258-.027.55-.074.646-.1.414-.12.59-.552.299-.74-.143-.093-.316-.07-.527.067-.292.19-.445.251-.683.275-.142.013-.251.043-.319.093-.095.067-.146.07-.778.077-.788.01-.825.02-.988.311-.089.157-.102.22-.102.435 0 .224.017.29.17.652l.166.401.014.445c.02.68-.106 1.382-.316 1.786-.065.124-.112.244-.102.268.01.027-.055.117-.153.207-.122.117-.17.184-.17.254 0 .08-.268.044-.224-.037.248-.438.377-1.15.353-1.953-.017-.528-.02-.538-.176-.993-.19-.562-.2-.72-.055-.886a.345.345 0 0 0 .102-.211c0-.067.03-.127.099-.187.129-.114.2-.445.139-.64-.156-.464-.34-.601-.601-.444zM3.663 3.482c-.16.07-.193.21-.18.732l.014.431-.12.067c-.101.057-.159.06-.424.044-.336-.024-.564.03-.628.154-.048.083-.041.344.007.391.057.057.387.05.604-.013.102-.03.248-.057.32-.06.118-.004.146.01.21.106.16.228.2.743.078.944-.136.22-.234.3-.38.3a.63.63 0 0 0-.272.08 1.079 1.079 0 0 1-.31.101c-.182.024-.295.1-.36.254-.053.127-.003.214.17.301.19.097.262.084.544-.083.303-.177.486-.2.605-.074.068.074.075.11.075.529-.004.508-.038.846-.106.986-.037.077-.074.1-.17.107-.101.01-.132-.003-.183-.083-.173-.271-.374-.358-.503-.218-.071.08-.074.305-.007.468.072.164.276.365.418.412.194.063.646-.03.799-.164.217-.187.285-.669.234-1.649-.02-.391-.024-.736-.01-.759a.683.683 0 0 1 .193-.137c.136-.07.174-.11.197-.21.02-.088.02-.155-.006-.212-.038-.076-.051-.08-.238-.063-.258.027-.296-.017-.292-.318.003-.247.074-.421.193-.471.041-.017.167-.047.279-.067.217-.037.367-.12.384-.214.04-.201-.16-.368-.405-.335-.125.017-.16.01-.214-.05-.057-.064-.064-.117-.057-.468.01-.472-.027-.642-.163-.736-.116-.08-.153-.084-.296-.023z" />
          <path d="M5.572 3.642c-.146.074-.564.485-.564.555 0 .074.163.208.252.208.23 0 .737-.288.805-.459.04-.107-.024-.217-.184-.31-.132-.08-.142-.08-.309.006zM16.208 4.605c-.204.127-.241.255-.245.786 0 .345.01.418.068.519.14.234.357.137.357-.154 0-.087.05-.264.14-.472.19-.455.21-.531.166-.612-.041-.073-.11-.113-.242-.144-.064-.016-.129.004-.244.077zM14.805 4.886c-.105.104-.116.13-.116.318 0 .147.028.27.106.462.139.34.142.558.017.745a1.91 1.91 0 0 0-.17.449c-.051.2-.116.364-.184.461-.142.204-.19.411-.166.72.024.314.16.604.312.675.058.026.225.057.378.063.36.02.567-.06.645-.25l.054-.128.102.127c.078.097.126.124.21.124a.25.25 0 0 0 .17-.063c.055-.057.055-.08 0-.325a2.446 2.446 0 0 0-.122-.425c-.122-.28-.513-.531-.635-.408-.044.044-.04.084.02.325.068.27.068.28.007.364-.136.191-.496.14-.59-.083-.092-.218-.065-.445.084-.753.075-.15.136-.324.136-.384s.044-.191.099-.291c.17-.315.23-.803.17-1.345-.048-.418-.089-.491-.29-.491-.094 0-.149.026-.237.113zM16.126 6.194c-.054.04-.06.097-.054.525.007.565.04.743.2.997.068.107.153.32.204.501.095.358.18.499.452.743.241.217.431.3.69.304.268 0 .38-.077.394-.274.013-.19-.116-.321-.354-.358-.146-.02-.19-.047-.367-.227-.451-.462-.693-.96-.798-1.646-.037-.227-.088-.451-.115-.495-.068-.097-.174-.127-.252-.07z" />
        </g>
      </g>
    </Wrapper>
  );
}

MultiColorSohuNews.propTypes = PROP_TYPES;
MultiColorSohuNews.defaultProps = DEFAULT_PROPS;

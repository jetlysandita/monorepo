// icon:130-spinner8 | Icomoon https://icomoon.io/ | Keyamoon
import * as React from 'react';

function IconSpiner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 16c-2.137 0-4.146-.832-5.657-2.343S0 10.137 0 8c0-1.513.425-2.986 1.228-4.261A8.02 8.02 0 014.421.844l.672 1.341a6.53 6.53 0 00-2.596 2.354A6.48 6.48 0 001.5 8c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-.345-2.426-.997-3.461a6.515 6.515 0 00-2.596-2.354l.672-1.341a8.02 8.02 0 013.193 2.895A7.981 7.981 0 0116 8c0 2.137-.832 4.146-2.343 5.657S10.137 16 8 16z"
      />
    </svg>
  );
}

export default IconSpiner;

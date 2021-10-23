import React from 'react';
import LoadingIcon from '../loading.svg'


export default function LoadingPage() {
  return (<div className="divLoader mx-auto mt-5 pt-5">
  <img className="svgLoader" src={LoadingIcon} alt="Loading Icon" />
</div>);
}

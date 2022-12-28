interface Props {
  centerRipple?: boolean
}

export default function SpinnerRipple({ centerRipple }: Props) {
  const ripplePosition = centerRipple
    ? 'container mx-auto justify-center h-44 items-center flex'
    : ''
  return (
    <>
      <div className={ripplePosition}>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
        <style jsx>
          {`
            .lds-ripple {
              display: inline-block;
              position: relative;
              width: 80px;
              height: 80px;
            }
            .lds-ripple div {
              position: absolute;
              border: 4px solid red;
              opacity: 1;
              border-radius: 50%;
              animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
            }
            .lds-ripple div:nth-child(2) {
              animation-delay: -0.5s;
            }
            @keyframes lds-ripple {
              0% {
                top: 36px;
                left: 36px;
                width: 0;
                height: 0;
                opacity: 1;
              }
              100% {
                top: 0px;
                left: 0px;
                width: 72px;
                height: 72px;
                opacity: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  )
}

export function SpinnerRoller() {
  return (
    <>
      <span className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </span>
      <style jsx>
        {`
          .lds-ellipsis {
            display: inline-block;
            position: relative;
            width: 40px;
            height: 40px;
          }
          .lds-ellipsis div {
            position: absolute;
            top: 20px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: red;
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
          }
          .lds-ellipsis div:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
          }
          .lds-ellipsis div:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
          }
          .lds-ellipsis div:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
          }
          .lds-ellipsis div:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
          }
          @keyframes lds-ellipsis1 {
            0% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }
          @keyframes lds-ellipsis3 {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(0);
            }
          }
          @keyframes lds-ellipsis2 {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(24px, 0);
            }
          }
        `}
      </style>
    </>
  )
}

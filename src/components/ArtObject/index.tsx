import cl from "classnames";
import styles from "./style.module.scss";

interface ArtObjectProps {
  className?: string;
}

export function ArtObject({ className }: ArtObjectProps) {
  return (
    <div className={cl(styles.artObject, className)}>
      <div className={styles.artObject__container}>
        <div className={styles.artObject__column}>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_textSpace
            )}
          >
            <h3>How many ?</h3>
            <p>
              Our genesis land NFT collection will comprise
              <br />
              <strong className={styles.artObject__textLarge}>
                5555 NFTs.
              </strong>
            </p>
          </div>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_trio
            )}
          >
            <div>
              <svg width="56" height="25" fill="none">
                <path
                  stroke="#fff"
                  strokeWidth="2.285"
                  d="M1.334 21.379 19.156 3.555v17.822L36.98 3.557v17.822L54.802 3.557v17.822"
                />
              </svg>
            </div>
            <div>
              <svg width="93" height="28" fill="none">
                <g clipPath="url(#a)">
                  <path
                    fill="#fff"
                    d="M13.69 3.035c0-7.161 4.474 2.99 2.687 6.09 1.79-3.1 12.82-4.3 6.617-.72 6.203-3.58-.35 5.377-3.93 5.377 3.58 0 10.133 8.952 3.93 5.376 6.203 3.581-4.827 2.38-6.617-.72 1.79 3.1-2.688 13.252-2.688 6.09 0 7.162-4.476-2.99-2.688-6.09-1.79 3.1-12.82 4.301-6.617.72-6.203 3.581.351-5.376 3.932-5.376-3.58 0-10.135-8.953-3.932-5.376-6.203-3.581 4.827-2.381 6.617.72C9.213 6.02 13.69-4.127 13.69 3.034"
                  />
                </g>
                <g clipPath="url(#b)">
                  <path
                    fill="#fff"
                    d="M46.593 3.035c0-7.161 4.474 2.99 2.688 6.09 1.79-3.1 12.82-4.3 6.617-.72 6.203-3.58-.351 5.377-3.931 5.377 3.58 0 10.134 8.952 3.93 5.376 6.204 3.581-4.826 2.38-6.616-.72 1.79 3.1-2.688 13.252-2.688 6.09 0 7.162-4.477-2.99-2.688-6.09-1.79 3.1-12.82 4.301-6.617.72-6.203 3.581.35-5.376 3.932-5.376-3.581 0-10.135-8.953-3.932-5.376-6.203-3.581 4.827-2.381 6.617.72-1.788-3.105 2.688-13.252 2.688-6.091"
                  />
                </g>
                <g clipPath="url(#c)">
                  <path
                    fill="#fff"
                    d="M79.496 3.035c0-7.161 4.475 2.99 2.688 6.09 1.79-3.1 12.82-4.3 6.617-.72 6.203-3.58-.35 5.377-3.93 5.377 3.58 0 10.133 8.952 3.93 5.376 6.203 3.581-4.827 2.38-6.617-.72 1.79 3.1-2.688 13.252-2.688 6.09 0 7.162-4.476-2.99-2.688-6.09-1.79 3.1-12.82 4.301-6.617.72-6.203 3.581.351-5.376 3.933-5.376-3.582 0-10.136-8.953-3.933-5.376-6.203-3.581 4.828-2.381 6.617.72-1.788-3.105 2.688-13.252 2.688-6.091"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.496.529h26.506v26.506H.496z" />
                  </clipPath>
                  <clipPath id="b">
                    <path fill="#fff" d="M33.4.529h26.505v26.506H33.4z" />
                  </clipPath>
                  <clipPath id="c">
                    <path fill="#fff" d="M66.303.529h26.506v26.506H66.303z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <svg width="84" height="20" fill="none">
                <path
                  fill="#fff"
                  d="M15.943.316c-4.99 0-8.114 3.62-8.114 9.376 0 5.757 3.124 9.364 8.114 9.364s8.113-3.607 8.113-9.364c0-5.756-3.123-9.376-8.113-9.376m0 2.086c3.599 0 5.856 2.816 5.856 7.29 0 4.462-2.257 7.278-5.856 7.278-3.6 0-5.857-2.816-5.857-7.278 0-4.474 2.257-7.29 5.857-7.29"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M3.104 8.764c1.188 1.302 2.983 3.119 5.056 4.719 2.575 1.987 5.382 3.482 7.89 3.482 2.481 0 5.009-1.471 7.296-3.444 1.863-1.607 3.433-3.426 4.558-4.755a29.6 29.6 0 0 0-4.902-3.906c-2.344-1.48-4.821-2.512-6.952-2.512-2.153 0-4.912 1.048-7.545 2.54-2.16 1.223-4.106 2.67-5.401 3.876m4.292-5.833C10.13 1.383 13.305.099 16.05.099c2.766 0 5.682 1.3 8.153 2.86 2.495 1.576 4.69 3.515 6.046 5.003l.669.733-.645.755-.429.505c-1.13 1.337-2.9 3.432-5.03 5.27-2.396 2.066-5.449 3.989-8.764 3.989-3.29 0-6.605-1.899-9.264-3.951-2.701-2.084-4.93-4.489-6.077-5.805l-.663-.762.686-.74C2.142 6.433 4.64 4.492 7.396 2.93"
                  clipRule="evenodd"
                />
                <path
                  fill="#fff"
                  d="M68.262.316c-4.99 0-8.114 3.62-8.114 9.376 0 5.757 3.124 9.364 8.114 9.364s8.114-3.607 8.114-9.364c0-5.756-3.124-9.376-8.114-9.376m0 2.086c3.6 0 5.856 2.816 5.856 7.29 0 4.462-2.257 7.278-5.856 7.278-3.6 0-5.856-2.816-5.856-7.278 0-4.474 2.257-7.29 5.856-7.29"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M55.423 8.764c1.188 1.302 2.983 3.119 5.056 4.719 2.575 1.987 5.382 3.482 7.89 3.482 2.481 0 5.009-1.471 7.296-3.444 1.863-1.607 3.433-3.426 4.559-4.755A29.6 29.6 0 0 0 75.32 4.86c-2.344-1.48-4.82-2.512-6.952-2.512-2.152 0-4.911 1.048-7.545 2.54-2.159 1.223-4.105 2.67-5.4 3.876m4.293-5.833C62.448 1.383 65.624.099 68.369.099c2.766 0 5.683 1.3 8.153 2.86 2.495 1.576 4.69 3.515 6.046 5.003l.669.733-.645.755-.428.505c-1.13 1.337-2.9 3.432-5.03 5.27-2.396 2.066-5.45 3.989-8.765 3.989-3.29 0-6.604-1.899-9.264-3.951-2.7-2.084-4.93-4.489-6.077-5.805l-.663-.762.686-.74c1.41-1.522 3.908-3.463 6.665-5.025"
                  clipRule="evenodd"
                />
                <path
                  fill="#fff"
                  d="m39.97 15.857 1.285-1.253L36.4 9.888h13.914V8.117H36.4L41.255 3.4 39.97 2.148l-7.022 6.854z"
                />
              </svg>
            </div>
          </div>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_textSpace
            )}
          >
            <h3>How DO I Get Dusklist?</h3>
            <p>
              Get engaged and active with the community. The earlier you are and
              more sGet engaged and active with the community. The earlier you
              are and more support you bring, the higher your chances.upport you
              bring, the higher your chances.
            </p>
          </div>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_textSpace
            )}
          >
            <h3>HOW MUCH?</h3>
            <p>
              Each genesis land NFT will be priced at
              <br />
              <strong>0.12eth + gas fees.</strong>
            </p>
          </div>
        </div>
        <div className={styles.artObject__column}>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_textSpace
            )}
          >
            <h3>WHEN mint?</h3>
            <p>
              We are targeting a release <strong>in mid May.</strong>
            </p>
          </div>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_textSpace
            )}
          >
            <h3>Maximum mintable?</h3>
            <p>
              For Dusklist: <strong>1 per wallet.</strong>
            </p>
            <p>
              For public sale: <strong>2 per transaction.</strong>
            </p>
          </div>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_textSpace
            )}
          >
            <h3>When is staking?</h3>
            <p>
              Staking with the EON Corporation will go live in the month after
              mint.
            </p>
          </div>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_duo
            )}
          >
            <div>
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_684)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.5776 0C32.2338 0 32.7658 0.531967 32.7658 1.18818V12.6764C32.7658 13.9824 34.5665 14.3324 35.0557 13.1215L39.359 2.4698C39.605 1.86137 40.2974 1.56742 40.906 1.81324L42.6372 2.51269C43.2456 2.75851 43.5397 3.45102 43.2937 4.05945L38.7058 15.4151C38.2208 16.6152 39.7321 17.6157 40.6476 16.7004L49.3077 8.0401C49.772 7.57609 50.5241 7.57609 50.9881 8.0401L52.3084 9.36038C52.7724 9.8244 52.7724 10.5767 52.3084 11.0407L44.5315 18.8177C43.6032 19.746 44.6444 21.2723 45.8474 20.7466L55.9256 16.3433C56.5271 16.0806 57.2275 16.3551 57.4901 16.9564L58.2378 18.6674C58.5004 19.2687 58.2259 19.9692 57.6247 20.2319L46.0114 25.3058C44.8315 25.8213 45.1996 27.5828 46.4869 27.5828H59.1604C59.8166 27.5828 60.3486 28.1148 60.3486 28.771V30.6382C60.3486 31.2943 59.8166 31.8264 59.1604 31.8264H46.4872C45.1995 31.8264 44.8318 33.5878 46.0114 34.1032L57.6247 39.1773C58.2259 39.4399 58.5004 40.1404 58.2378 40.7416L57.4901 42.4526C57.2275 43.0541 56.5271 43.3286 55.9256 43.0657L45.8474 38.6626C44.6444 38.1368 43.6032 39.663 44.5315 40.5916L52.3084 48.3682C52.7724 48.8325 52.7724 49.5846 52.3084 50.0486L50.9881 51.369C50.5241 51.833 49.772 51.833 49.3077 51.369L40.6476 42.7086C39.7321 41.7934 38.2208 42.7939 38.7058 43.9939L43.2937 55.3497C43.5397 55.958 43.2456 56.6505 42.6372 56.8964L40.906 57.596C40.2974 57.8416 39.605 57.5478 39.359 56.9392L35.0557 46.2877C34.5665 45.0767 32.7658 45.4269 32.7658 46.7327V58.2209C32.7658 58.8771 32.2338 59.4091 31.5776 59.4091H29.7104C29.0542 59.4091 28.5222 58.8771 28.5222 58.2209V46.7327C28.5222 45.4269 26.7216 45.0767 26.2324 46.2877L21.9288 56.9392C21.683 57.5478 20.9905 57.8416 20.3821 57.596L18.6509 56.8964C18.0424 56.6505 17.7485 55.958 17.9943 55.3497L22.5823 43.9939C23.0672 42.7939 21.5558 41.7934 20.6405 42.7086L11.9802 51.369C11.5162 51.833 10.7639 51.833 10.2999 51.369L8.97959 50.0486C8.51557 49.5846 8.51557 48.8325 8.97959 48.3682L16.7565 40.5913C17.6849 39.663 16.6438 38.1368 15.4406 38.6626L5.36231 43.0657C4.761 43.3286 4.06054 43.0541 3.79782 42.4526L3.05028 40.7416C2.78756 40.1404 3.06205 39.4399 3.66337 39.1773L15.2766 34.1032C16.4563 33.5878 16.0883 31.8264 14.8008 31.8264H2.12764C1.47142 31.8264 0.939453 31.2943 0.939453 30.6382V28.771C0.939453 28.1148 1.47142 27.5828 2.12764 27.5828H14.8009C16.0884 27.5828 16.4564 25.8213 15.2766 25.3058L3.66336 20.2319C3.06204 19.9692 2.78755 19.2687 3.05027 18.6674L3.79781 16.9564C4.06054 16.3551 4.76097 16.0806 5.36231 16.3433L15.4406 20.7466C16.6438 21.2723 17.6849 19.746 16.7565 18.8177L8.97959 11.0407C8.51557 10.5767 8.51557 9.8244 8.97959 9.36038L10.2998 8.04013C10.7639 7.57612 11.5162 7.57612 11.9802 8.04013L20.6405 16.7004C21.5558 17.6157 23.0672 16.6153 22.5823 15.4152L17.9943 4.05945C17.7485 3.45102 18.0425 2.75851 18.6509 2.51269L20.3821 1.81324C20.9905 1.56742 21.683 1.86137 21.9288 2.4698L26.2324 13.1215C26.7216 14.3324 28.5222 13.9824 28.5222 12.6764V1.18818C28.5222 0.531967 29.0542 0 29.7104 0H31.5776ZM30.644 42.435C37.6748 42.435 43.3745 36.7353 43.3745 29.7046C43.3745 22.6737 37.6748 16.974 30.644 16.974C23.6132 16.974 17.9135 22.6737 17.9135 29.7046C17.9135 36.7353 23.6132 42.435 30.644 42.435Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_684">
                    <rect
                      width="59.4091"
                      height="59.4091"
                      fill="white"
                      transform="translate(0.939453)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <svg width="182" height="37" viewBox="0 0 182 37" fill="none">
                <g clipPath="url(#clip0_3523_2389)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.435092 18.585L18.2578 36.5273L36.0806 18.585L18.4954 18.585L36.0806 0.881868L0.435094 0.881865L18.0203 18.585L0.435092 18.585Z"
                    fill="white"
                  />
                </g>
                <g clipPath="url(#clip1_3523_2389)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M115.481 36.5274L132.963 19.1616L115.481 1.7959L115.481 18.9301L98.2316 1.7959L98.2316 36.5274L115.481 19.3931L115.481 36.5274Z"
                    fill="white"
                  />
                </g>
                <g clipPath="url(#clip2_3523_2389)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M181.405 19.2782L164.039 1.7959L146.673 19.2782L163.807 19.2782L146.673 36.5274L181.405 36.5274L164.27 19.2782L181.405 19.2782Z"
                    fill="white"
                  />
                </g>
                <g clipPath="url(#clip3_3523_2389)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M70.2638 0.881836H63.1347V10.099L56.6171 3.58148L51.5761 8.6225L58.0936 15.14H48.8765V22.2691H58.0936L51.5761 28.7865L56.6171 33.8277L63.1347 27.3101V36.5273H70.2638V27.3101L76.7813 33.8277L81.8223 28.7867L75.3047 22.2691H84.5219V15.14H75.3047L81.8223 8.6225L76.7813 3.58146L70.2638 10.099V0.881836Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3523_2389">
                    <rect
                      width="35.6455"
                      height="35.6455"
                      fill="white"
                      transform="translate(36.0806 36.5273) rotate(-180)"
                    />
                  </clipPath>
                  <clipPath id="clip1_3523_2389">
                    <rect
                      width="34.7315"
                      height="34.7315"
                      fill="white"
                      transform="translate(132.963 1.7959) rotate(90)"
                    />
                  </clipPath>
                  <clipPath id="clip2_3523_2389">
                    <rect
                      width="34.7315"
                      height="34.7315"
                      fill="white"
                      transform="translate(146.673 1.7959)"
                    />
                  </clipPath>
                  <clipPath id="clip3_3523_2389">
                    <rect
                      width="35.6455"
                      height="35.6455"
                      fill="white"
                      transform="translate(48.8765 0.881836)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.artObject__column}>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_textSpace
            )}
          >
            <h3>Which blockchain?</h3>
            <p>
              Dusktopia will be built on the{" "}
              <strong>Ethereum blockchain.</strong>
            </p>
          </div>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_textSpace
            )}
          >
            <h3>What is the utility?</h3>
            <p>
              Owning a genesis land NFT sets you up for the rest of our
              ecosystem. The land collection is the foundation of Dusktopia -
              holders will be rewarded in the short term through the staking
              mechanism. In the long term, they will be able to build on that
              genesis land with various properties and avatars we will be
              releasing.
            </p>
          </div>
          <div
            className={cl(
              styles.artObject__row,
              styles.artObject__row_type_textSpace
            )}
          >
            <h3>Future mints?</h3>
            <p>
              Immediately after mint, we are planning for a limited secondary
              land release for holders, claimable with $DAWN. Subsequently, we
              will release a Properties collection, as well as PFP avatars which
              will serve as your in-game role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import background from "@/../public/assets/Group.png";
import checklist from "@/../public/assets/Frame.svg";
import CheckingModal from "../CheckingModal";
import Checking from "../Checking";
import { ActualFeesContext } from "@/context/ActualFeesContext";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { getActualFee } = useContext(ActualFeesContext);

  const [address, setAddress] = useState("");

  const addressInputRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!addressInputRef.current.checkValidity()) {
      addressInputRef.current.reportValidity();
      return;
    }
    getActualFee(address);
    setAddress("");
    handleOpenModal();
  };

  const handleInvalid = (event) => {
    event.target.setCustomValidity("Please enter a valid contract address.");
  };

  const handleInput = (event) => {
    event.target.setCustomValidity("");
  };

  return (
    <main className="flex flex-col gap-20">
      <section className="relative xl:w-[1192px] md:h-[374px] p-10 md:rounded-[10px] md:flex justify-around items-center bg-gradient-to-r from-[#DDE5F9] to-[#FDD4D4] dark:bg-gradient-to-r dark:from-[#5E87EF] dark:to-[#F77D7D]">
        <Image
          src={background}
          alt="background"
          className="absolute md:rounded-[10px] z-0"
          layout="fill"
          objectFit="cover"
        />
        <header className="relative md:w-[427px] h-[166px] z-50">
          <h1 className="font-semibold text-[38px] leading-[50px] text-[#0C0D4F] dark:text-white">
            Track
          </h1>
          <h2 className="font-semibold text-[38px] leading-[50px] text-[#0C0D4F] dark:text-white">
            <span>Gas Prices</span> Effortlessly
          </h2>
          <p className="font-medium text-[16px] leading-[25px] text-[#4C4646] dark:text-white">
            Get up-to-the-minute gas price information to plan your transactions
            efficiently.
          </p>
        </header>
        <figure className="relative z-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" md:w-[400px] h-[270.68]"
            viewBox="0 0 400 271"
            fill="none"
          >
            <g clip-path="url(#clip0_2003_106)">
              <mask
                id="mask0_2003_106"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="400"
                height="271"
              >
                <path d="M400 0H0V270.681H400V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_2003_106)">
                <path
                  d="M365.89 94.7082C365.47 95.0532 365.05 95.3831 364.62 95.7081H258.567C257.777 95.3831 256.99 95.0498 256.207 94.7082C245.011 89.8358 234.59 83.3477 225.277 75.4511C219.093 70.2119 213.403 64.8028 209.279 59.7336C203.525 52.6596 198.226 44.9508 195.761 36.1672C193.302 27.3835 194.036 17.315 199.531 10.0311C201.232 7.79052 203.323 5.87515 205.705 4.37701C206.1 4.12705 206.5 3.88709 206.909 3.66212C213.498 -0.0373104 221.812 -0.937179 229.231 0.977529C239.855 3.72211 248.683 11.3859 254.982 20.3746C261.281 29.3582 265.371 39.6766 269.4 49.8801C273.489 31.6679 285.872 15.3553 302.6 7.0616C319.322 -1.23213 340.099 -1.13215 356.467 7.85148C361.617 10.6952 366.269 14.3594 370.24 18.6998C370.634 19.1248 371.02 19.5597 371.399 19.9996C379.383 29.2432 384.377 41.0814 384.787 53.2896C385.312 69.0171 378.023 84.8147 365.89 94.7082Z"
                  fill="#4C4646"
                  fill-opacity="0.133333"
                />
                <path
                  d="M262.806 95.7081H261.306C261.286 95.3731 261.261 95.0432 261.231 94.7082C260.707 88.169 259.61 81.6884 257.952 75.3412C254.148 60.8503 247.651 47.2048 238.8 35.1173C229.974 22.9911 218.847 12.7208 206.055 4.8919C205.961 4.83829 205.881 4.76405 205.82 4.67483C205.76 4.58561 205.72 4.48375 205.705 4.37698C205.68 4.23738 205.696 4.09369 205.75 3.96267C205.804 3.83165 205.894 3.71869 206.01 3.63695C206.126 3.55522 206.262 3.50807 206.404 3.50102C206.546 3.49396 206.686 3.52729 206.81 3.5971C206.844 3.61699 206.877 3.63868 206.909 3.66209C214.157 8.07969 220.885 13.2984 226.966 19.2197C237.844 29.8312 246.616 42.4056 252.817 56.2791C258.289 68.4296 261.64 81.427 262.726 94.7082C262.756 95.0431 262.781 95.3781 262.806 95.7081Z"
                  className=" fill-white dark:fill-black"
                />
                <path
                  d="M371.399 19.9996C371.389 20.0052 371.377 20.0086 371.364 20.0096C370.27 20.2096 369.17 20.4195 368.08 20.6445C359.134 22.4818 350.376 25.141 341.919 28.5883C333.484 32.0307 325.37 36.2131 317.672 41.0864C309.965 45.9572 302.697 51.4906 295.951 57.6239C289.205 63.7483 283.016 70.4604 277.459 77.6808C273.305 83.0907 269.528 88.7799 266.155 94.7082C265.966 95.0382 265.78 95.3731 265.595 95.7081H263.881C264.061 95.3731 264.246 95.0382 264.436 94.7082C268.516 87.4443 273.195 80.533 278.424 74.0464C284.206 66.8674 290.615 60.2172 297.576 54.1744C304.492 48.1656 311.915 42.7663 319.762 38.0368C327.642 33.2883 335.926 29.2464 344.518 25.9587C352.857 22.771 361.465 20.3416 370.24 18.6998C370.484 18.6548 370.724 18.6098 370.969 18.5648C371.904 18.3948 372.304 19.8046 371.399 19.9996Z"
                  className=" fill-white dark:fill-black"
                />
                <path
                  d="M98.8247 98.6801C101.492 93.6455 101.932 87.0882 98.6157 82.4555C96.6417 79.6978 93.5595 77.8875 90.3254 76.8665C87.0914 75.8454 83.6797 75.5453 80.2974 75.2972C76.9492 75.0515 73.5415 74.8549 70.2708 75.6122C67.0001 76.3694 63.8321 78.2194 62.2388 81.1744C59.5472 86.1664 61.9991 92.5674 60.0222 97.883C58.208 102.761 53.0446 105.613 47.9689 106.764C42.8931 107.915 37.5954 107.792 32.5171 108.932C27.4389 110.072 22.2669 112.897 20.4205 117.763C19.0853 121.282 19.7487 125.335 21.5081 128.663C23.2674 131.99 26.0228 134.683 28.9475 137.052C33.3108 140.585 38.4155 143.612 44.0217 143.918C49.929 144.241 55.705 141.429 59.9567 137.315C64.2085 133.201 67.103 127.885 69.4156 122.44C70.8827 118.986 72.2689 115.268 75.2089 112.935C77.3693 111.221 80.117 110.47 82.7818 109.76L85.7992 108.956C88.5335 108.24 91.0925 106.973 93.3187 105.232C95.5449 103.49 97.3913 101.312 98.7443 98.8307C98.7713 98.7806 98.7981 98.7304 98.8247 98.6801Z"
                  fill="#2F2E41"
                />
                <path
                  d="M75.028 264.292H68.8995L65.9834 240.652H75.0295L75.028 264.292Z"
                  className=" fill-[#FFB8B8] dark:fill-[#CCB6B6]"
                />
                <path
                  d="M64.5214 262.541H76.3415V269.983H57.0791C57.0791 269.006 57.2716 268.038 57.6456 267.135C58.0196 266.232 58.5678 265.412 59.2589 264.721C59.95 264.029 60.7704 263.481 61.6734 263.107C62.5763 262.733 63.5441 262.541 64.5214 262.541Z"
                  fill="#2F2E41"
                />
                <path
                  d="M126.02 264.292H119.892L116.976 240.652H126.022L126.02 264.292Z"
                  className=" fill-[#FFB8B8] dark:fill-[#CCB6B6]"
                />
                <path
                  d="M115.514 262.541H127.334V269.983H108.071C108.071 269.006 108.264 268.038 108.638 267.135C109.012 266.232 109.56 265.412 110.251 264.721C110.942 264.029 111.763 263.481 112.666 263.107C113.568 262.733 114.536 262.541 115.514 262.541Z"
                  fill="#2F2E41"
                />
                <path
                  d="M86.8097 245.503C86.7242 245.503 86.6388 245.498 86.5538 245.489L61.6189 242.817C61.2877 242.782 60.9679 242.676 60.6807 242.507C60.3936 242.339 60.1456 242.111 59.9535 241.839C59.7613 241.567 59.6292 241.257 59.5661 240.93C59.503 240.603 59.5103 240.266 59.5875 239.942L81.6654 155.97C81.7688 155.542 81.9895 155.153 82.3027 154.844C82.6159 154.536 83.009 154.321 83.4378 154.224L103.919 148.515C104.329 148.424 104.757 148.446 105.156 148.576C105.556 148.706 105.914 148.941 106.193 149.256C119.361 164.108 129.284 197.034 136.801 238.534C136.858 238.848 136.851 239.169 136.779 239.479C136.708 239.789 136.574 240.082 136.386 240.338C136.197 240.595 135.959 240.811 135.685 240.973C135.411 241.134 135.107 241.238 134.791 241.279L114.36 243.887C113.781 243.963 113.194 243.818 112.716 243.483C112.237 243.147 111.902 242.645 111.775 242.074L101.835 197.757C101.743 197.349 101.515 196.985 101.187 196.726C100.859 196.466 100.452 196.327 100.034 196.332C99.616 196.337 99.2124 196.485 98.8906 196.752C98.5689 197.019 98.3486 197.388 98.2666 197.798L89.1029 243.617C88.9991 244.148 88.7135 244.627 88.2951 244.972C87.8766 245.316 87.3515 245.503 86.8097 245.503Z"
                  fill="#2F2E41"
                />
                <path
                  d="M83.0169 110.211C89.7982 110.211 95.2956 104.713 95.2956 97.9321C95.2956 91.1508 89.7982 85.6535 83.0169 85.6535C76.2356 85.6535 70.7383 91.1508 70.7383 97.9321C70.7383 104.713 76.2356 110.211 83.0169 110.211Z"
                  className=" fill-[#FFB8B8] dark:fill-[#CCB6B6]"
                />
                <path
                  d="M82.6739 156.206C82.1578 156.205 81.6562 156.034 81.2474 155.719C80.8386 155.404 80.5454 154.963 80.4136 154.463L73.0269 126.713C72.4937 124.719 72.7145 122.598 73.647 120.757C74.5795 118.915 76.1582 117.482 78.0811 116.732C84.0272 114.411 89.6922 113.55 94.9187 114.172C99.564 114.726 105.294 142.227 104.915 142.814L106.748 148.313C106.852 148.624 106.89 148.955 106.858 149.282C106.826 149.609 106.725 149.926 106.563 150.212C106.401 150.498 106.18 150.746 105.916 150.941C105.651 151.137 105.349 151.274 105.028 151.344L83.1835 156.15C83.0162 156.187 82.8453 156.206 82.6739 156.206Z"
                  fill="#4C4646"
                />
                <path
                  d="M89.2941 184.585C89.3993 184.039 89.3835 183.476 89.2478 182.937C89.1121 182.397 88.8597 181.894 88.5085 181.463C88.1573 181.032 87.7159 180.683 87.2152 180.44C86.7145 180.198 86.1668 180.069 85.6106 180.061L81.3548 167.228L77.0051 172.745L81.7134 184.086C81.7624 185.021 82.1528 185.906 82.8105 186.572C83.4683 187.239 84.3477 187.641 85.2821 187.703C86.2166 187.764 87.1411 187.481 87.8805 186.906C88.6199 186.332 89.1229 185.506 89.2941 184.585Z"
                  className=" fill-[#FFB8B8] dark:fill-[#CCB6B6]"
                />
                <path
                  d="M144.009 153.744C143.755 153.249 143.395 152.817 142.955 152.476C142.514 152.136 142.005 151.897 141.463 151.774C140.92 151.652 140.357 151.651 139.814 151.77C139.27 151.889 138.76 152.125 138.318 152.463L127.042 145.003L127.031 152.029L137.741 158.036C138.357 158.741 139.211 159.195 140.14 159.313C141.069 159.43 142.009 159.203 142.782 158.674C143.554 158.145 144.106 157.351 144.332 156.442C144.559 155.533 144.444 154.573 144.009 153.744Z"
                  className=" fill-[#FFB8B8] dark:fill-[#CCB6B6]"
                />
                <path
                  d="M80.3716 178.656C79.8784 178.656 79.3978 178.501 78.998 178.212C78.5983 177.923 78.2997 177.516 78.1449 177.047L68.1681 155.942C67.7589 154.705 67.5505 153.411 67.5508 152.108L70.5503 124.677C70.5502 123.141 71.1363 121.663 72.1889 120.545C73.2415 119.426 74.6813 118.752 76.2144 118.659C77.7474 118.566 79.2581 119.062 80.4381 120.045C81.618 121.028 82.3782 122.425 82.5635 123.949L77.9743 155.26L85.2976 174.477C85.4134 174.988 85.3543 175.524 85.1296 175.997C84.905 176.471 84.5278 176.855 84.0586 177.089L81.42 178.409C81.0944 178.571 80.7355 178.656 80.3716 178.656Z"
                  fill="#4C4646"
                />
                <path
                  d="M133.655 156.514C133.288 156.515 132.926 156.428 132.598 156.262L112.757 146.24C111.594 145.654 110.533 144.884 109.613 143.961L90.2477 124.532C89.1635 123.445 88.5353 121.984 88.4914 120.449C88.4474 118.914 88.9911 117.42 90.0114 116.272C91.0316 115.124 92.4515 114.409 93.9813 114.272C95.511 114.135 97.0352 114.588 98.2426 115.537L119.221 138.835L135.85 149.393C136.293 149.673 136.629 150.094 136.804 150.588C136.979 151.082 136.983 151.621 136.816 152.118L135.879 154.915C135.722 155.381 135.424 155.786 135.025 156.073C134.626 156.36 134.147 156.514 133.655 156.514Z"
                  fill="#4C4646"
                />
                <path
                  d="M69.0505 91.5838C71.1363 94.3124 74.1344 96.199 77.4968 96.8987C80.905 97.603 84.452 97.0947 87.5253 95.4618C89.9982 94.1257 91.9771 92.1203 93.9153 90.146C94.7242 89.322 95.5858 88.3717 95.5451 87.2477C95.482 85.5061 93.3883 84.554 91.5914 84.1741C85.6929 82.9436 79.5555 83.6339 74.0777 86.1437C71.6381 87.277 69.0962 89.3272 69.4626 91.8757"
                  fill="#2F2E41"
                />
                <path
                  d="M391.501 94.7082H150.538C148.285 94.7114 146.125 95.6078 144.532 97.2009C142.939 98.7941 142.042 100.954 142.039 103.207V196.193C142.042 198.446 142.939 200.606 144.532 202.199C146.125 203.792 148.285 204.688 150.538 204.691H391.501C393.754 204.688 395.914 203.792 397.507 202.199C399.1 200.606 399.997 198.446 400 196.193V103.207C399.997 100.954 399.1 98.7941 397.507 97.2009C395.914 95.6078 393.754 94.7114 391.501 94.7082ZM399 196.193C398.998 198.181 398.207 200.087 396.801 201.493C395.395 202.898 393.489 203.689 391.501 203.692H150.538C148.55 203.689 146.644 202.898 145.238 201.493C143.832 200.087 143.042 198.181 143.039 196.193V103.207C143.042 101.219 143.832 99.3129 145.238 97.9071C146.644 96.5013 148.55 95.7105 150.538 95.708H391.501C393.489 95.7105 395.395 96.5013 396.801 97.9071C398.207 99.3129 398.998 101.219 399 103.207V196.193Z"
                  fill="#3F3D56"
                />
                <path
                  d="M194.288 178.695C188.553 178.695 182.947 176.995 178.179 173.809C173.411 170.623 169.694 166.094 167.5 160.796C165.305 155.498 164.731 149.668 165.85 144.043C166.969 138.418 169.73 133.252 173.785 129.197C177.84 125.142 183.007 122.38 188.631 121.261C194.256 120.143 200.086 120.717 205.384 122.911C210.683 125.106 215.211 128.822 218.397 133.591C221.583 138.359 223.284 143.965 223.284 149.7C223.275 157.387 220.217 164.757 214.782 170.193C209.346 175.629 201.976 178.687 194.288 178.695ZM194.288 121.704C188.751 121.704 183.338 123.346 178.735 126.422C174.131 129.498 170.542 133.871 168.424 138.986C166.305 144.102 165.75 149.731 166.83 155.162C167.911 160.592 170.577 165.581 174.492 169.496C178.408 173.411 183.396 176.077 188.827 177.158C194.257 178.238 199.886 177.683 205.002 175.564C210.117 173.446 214.49 169.857 217.566 165.253C220.642 160.65 222.284 155.237 222.284 149.7C222.276 142.277 219.323 135.162 214.075 129.913C208.826 124.665 201.711 121.712 194.288 121.704Z"
                  fill="#3F3D56"
                />
                <path
                  d="M369.998 131.203H254.515C252.901 131.204 251.35 131.829 250.187 132.948C249.024 134.068 248.339 135.594 248.276 137.207C248.268 137.288 248.265 137.37 248.266 137.452C248.269 139.108 248.928 140.696 250.099 141.868C251.271 143.039 252.859 143.698 254.515 143.701H369.998C371.655 143.701 373.245 143.042 374.416 141.87C375.588 140.699 376.247 139.109 376.247 137.452C376.247 135.794 375.588 134.205 374.416 133.033C373.245 131.861 371.655 131.203 369.998 131.203Z"
                  className=" fill-[#0C0D4F] dark:fill-[#B0B1F3]"
                />
                <path
                  d="M369.998 155.699H254.515C252.901 155.7 251.35 156.325 250.187 157.445C249.024 158.564 248.339 160.09 248.276 161.703C248.268 161.784 248.265 161.866 248.266 161.948C248.269 163.605 248.928 165.193 250.099 166.364C251.271 167.536 252.859 168.195 254.515 168.197H369.998C371.655 168.197 373.245 167.539 374.416 166.367C375.588 165.195 376.247 163.605 376.247 161.948C376.247 160.291 375.588 158.701 374.416 157.529C373.245 156.357 371.655 155.699 369.998 155.699Z"
                  className=" fill-[#0C0D4F] dark:fill-[#B0B1F3]"
                />
                <path
                  d="M191.053 162.369C190.244 162.37 189.457 162.109 188.809 161.623L188.769 161.593L180.319 155.123C179.927 154.823 179.599 154.449 179.352 154.022C179.105 153.596 178.945 153.124 178.88 152.636C178.815 152.147 178.848 151.65 178.975 151.174C179.102 150.697 179.322 150.251 179.622 149.859C179.922 149.468 180.296 149.14 180.723 148.893C181.149 148.646 181.621 148.486 182.109 148.421C182.598 148.356 183.095 148.388 183.571 148.516C184.048 148.643 184.494 148.863 184.886 149.163L190.359 153.36L203.295 136.49C203.595 136.099 203.969 135.771 204.396 135.524C204.823 135.277 205.294 135.117 205.783 135.053C206.271 134.988 206.768 135.02 207.244 135.148C207.721 135.275 208.167 135.495 208.558 135.795L208.478 135.905L208.561 135.797C209.35 136.404 209.866 137.298 209.996 138.285C210.127 139.272 209.86 140.27 209.255 141.061L194.04 160.904C193.689 161.361 193.236 161.731 192.718 161.985C192.2 162.239 191.63 162.37 191.053 162.369Z"
                  className=" fill-[#0C0D4F] dark:fill-[#B0B1F3]"
                />
                <path
                  d="M190.971 270.681H0.499924C0.367336 270.681 0.240178 270.629 0.146424 270.535C0.05267 270.441 0 270.314 0 270.181C0 270.049 0.05267 269.922 0.146424 269.828C0.240178 269.734 0.367336 269.682 0.499924 269.682H190.971C191.103 269.682 191.231 269.734 191.324 269.828C191.418 269.922 191.471 270.049 191.471 270.181C191.471 270.314 191.418 270.441 191.324 270.535C191.231 270.629 191.103 270.681 190.971 270.681Z"
                  fill="#3F3D56"
                />
                <path
                  d="M341.577 72.1864C331.133 70.7499 320.527 70.989 310.159 72.8947C299.821 74.7847 289.841 78.2741 280.577 83.2374C275.371 86.0347 270.43 89.2992 265.815 92.9905C265.061 93.5928 266.128 94.6479 266.875 94.051C274.974 87.6089 284.052 82.5058 293.765 78.9356C303.401 75.3716 313.529 73.3169 323.792 72.8439C329.6 72.5772 335.419 72.8412 341.178 73.6326C341.37 73.6784 341.571 73.6499 341.743 73.5526C341.914 73.4554 342.042 73.2968 342.101 73.1088C342.152 72.9171 342.126 72.7127 342.028 72.54C341.93 72.3673 341.768 72.2403 341.577 72.1864Z"
                  className=" fill-white dark:fill-black"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2003_106">
                <rect
                  width="400"
                  height="271"
                  fill="white"
                  className=" md:w-[400px] h-[270.68]"
                />
              </clipPath>
            </defs>
          </svg>
        </figure>
      </section>

      <section>
        <form
          onSubmit={handleSubmit}
          className="md:flex grid grid-cols-1 gap-4 self-center items-center p-4"
        >
          <label className="xl:w-[956px] md:flex gap-4 items-center md:h-[54px]">
            <p className="text-[#112C75] dark:text-[#B0B1F3] text-center font-bold text-[16px]">
              Contract Address
            </p>
            <input
              id="addressInput"
              ref={addressInputRef}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onInvalid={handleInvalid}
              onInput={handleInput}
              className="xl:w-[791px] md:w-[400px] w-full h-[54px] pl-4 outline-none border border-gray-300 dark:bg-[#B0B1F3] dark:text-black rounded-[2px]"
              required
            />
          </label>
          <div className=" flex justify-center items-center">
            <button
              type="submit"
              className="md:w-[203px] w-52 h-[55px] bg-[#0C0D4F] text-[#FFFFFF] dark:bg-[#B0B1F3] dark:text-black rounded-[5px] text-[16px]"
            >
              Check
            </button>
          </div>
        </form>
      </section>

      <CheckingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="z-[999]"
      >
        <Checking />
      </CheckingModal>
    </main>
  );
}

export default HomePage;

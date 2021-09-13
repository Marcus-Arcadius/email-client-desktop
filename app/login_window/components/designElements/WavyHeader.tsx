import React from 'react';

type Props = {
    className?: string;
  };
  

const WavyHeader = function(props: Props) {
    const { className = '' } = props;
    return (
        <div className={className}>
      <svg width="400px" height="155px" viewBox="0 0 400 155" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>WeavyHeader_with_logo</title>
        <defs>
            <linearGradient x1="18.2339105%" y1="52.0123177%" x2="137.899587%" y2="42.0497172%" id="linearGradient-1">
                <stop stopColor="#A996FF" offset="0%" />
                <stop stopColor="#25C3FF" offset="100%" />
            </linearGradient>
            <path d="M36.2607279,67.4914422 C164.307514,71.9846616 269.005215,142.075055 305.385047,147.375059 C364.536081,155.992491 409.512486,130.547841 436,65.9483951 L436,0.566572238 L36,1 C18.562244,44.7096301 18.6491533,66.8734442 36.2607279,67.4914422 Z" id="path-2" />
            <filter x="-2.5%" y="-7.1%" width="105.1%" height="114.1%" filterUnits="objectBoundingBox" id="filter-3">
                <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.317408422 0" type="matrix" in="shadowBlurOuter1" />
            </filter>
            <path d="M36.2274946,49.8648233 C164.289398,54.2521759 269.002068,122.869955 305.385047,128.05819 C364.536081,136.493162 409.512486,111.587257 436,48.3555874 L436,1 C256.194803,1 122.86147,1 36,1 C-28.8768541,1 9.82037717,48.9601254 36.2274946,49.8648233 Z" id="path-4" />
            <filter x="-1.8%" y="-5.4%" width="103.7%" height="112.4%" filterUnits="objectBoundingBox" id="filter-5">
                <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" />
            </filter>
            <path d="M30.7310202,22.5769191 C30.7310202,22.586474 30.7310202,22.5944364 30.729303,22.6039913 C30.7162525,24.3471763 29.2570859,25.7636503 27.4665051,25.7636503 L16.5922576,25.7636503 C15.7966061,25.7636503 15.2321717,25.0062977 15.4770404,24.2673006 L17.9222929,16.8872197 C18.2641818,15.8555405 19.5288788,15.4383092 20.4404394,16.0579538 C22.1708333,17.2342977 24.2155556,18.3406561 26.4774141,18.9472254 C27.686904,19.2722601 28.8996566,19.4315925 30.0830455,19.4315925 C30.300096,19.4315925 30.5155152,19.426815 30.7310202,19.4156676 L30.7310202,22.5769191 Z M27.4665051,0.0356213873 L11.0481111,0.0356213873 C11.9295354,0.580586705 12.8174848,1.19562139 13.7119596,1.88231792 C14.2799141,2.3189104 14.8300101,2.76665029 15.3669697,3.2223526 L27.4665051,3.2223526 C29.2668737,3.2223526 30.7310202,4.65315896 30.7310202,6.40908382 L30.7310202,16.2225665 C29.640702,16.2974971 28.493202,16.1843468 27.3408081,15.875237 C24.0944091,15.0036445 21.2380657,12.771315 19.3724444,11.1668439 C18.396404,10.3286936 17.4251717,9.42852023 16.4833889,8.55692775 C14.9622323,7.14673988 13.388702,5.68886127 11.6945404,4.38713006 C11.1477071,3.96805491 10.607399,3.57923699 10.0704394,3.2223526 C8.80531313,2.37758092 7.56233838,1.70161272 6.33207071,1.19059249 C4.69071212,0.508757225 2.76370202,0.928 1.59576768,2.2441474 C1.58872727,2.25202601 1.58177273,2.25998844 1.57481818,2.26795087 C1.27448485,2.61050289 1.0100404,2.98331214 0.789727273,3.38327746 C1.98118687,3.32594798 3.14817677,3.47413295 4.23205556,3.81190751 C4.3250404,3.84375723 4.41811111,3.87560694 4.51118182,3.91072543 C4.8800303,4.04608671 5.25377273,4.20231792 5.62914646,4.37757514 C6.93333838,4.98305491 8.27659596,5.81793642 9.67540404,6.89185838 C11.252197,8.10122543 12.7015758,9.44603757 14.2375,10.867289 C15.2884949,11.8427283 15.6732273,13.3202197 15.2269343,14.667211 L11.9749545,24.4822023 C11.7218434,25.2460925 10.9931616,25.7636503 10.1706364,25.7636503 L6.53340909,25.7636503 C4.73312626,25.7636503 3.2689798,24.3327601 3.2689798,22.5769191 L3.2689798,6.86319364 C2.49702525,6.61619075 1.64659596,6.51586416 0.792989899,6.57637861 C0.531808081,6.59389595 0.268994949,6.62733815 0.00463636364,6.67519653 L0.00463636364,22.5769191 C0.00463636364,26.0968988 2.92769192,28.9503815 6.53340909,28.9503815 L27.4665051,28.9503815 C31.0672424,28.9503815 33.9953636,26.0903613 33.9953636,22.5769191 L33.9953636,6.40908382 C33.9953636,2.89572543 31.0672424,0.0356213873 27.4665051,0.0356213873 L27.4665051,0.0356213873 Z" id="path-6" />
            <linearGradient x1="8.8478676%" y1="84.1855759%" x2="91.1602154%" y2="15.8318341%" id="linearGradient-8">
                <stop stopColor="#A995FF" offset="0%"></stop>
                <stop stopColor="#24C3FF" offset="100%"></stop>
            </linearGradient>
            <polygon id="path-9" points="0.00537313433 0.0307826087 11.9169851 0.0307826087 11.9169851 13.9315652 0.00537313433 13.9315652" />
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Wave">
            <g id="Group" transform="translate(-36.000000, -1.000000)" fillRule="nonzero">
                <g id="WeavyHeader">
                    <g id="Path">
                        <use fill="black" fillOpacity="1" filter="url(#filter-3)" href="#path-2"></use>
                        <use fill="url(#linearGradient-1)" href="#path-2"></use>
                    </g>
                    <g id="Path">
                        <use fill="black" fillOpacity="1" filter="url(#filter-5)" href="#path-4"></use>
                        <use fill="#0F061E" href="#path-4"></use>
                    </g>
                </g>
            </g>
            <g id="Telios_main_rgb" transform="translate(220.000000, 38.472837)">
                <g id="Logo" transform="translate(0.000000, 0.527163)">
                    <mask id="mask-7" fill="white">
                        <use href="#path-6"></use>
                    </mask>
                    <g id="Clip-2"></g>
                    <path d="M30.7310202,22.5769191 C30.7310202,22.586474 30.7310202,22.5944364 30.729303,22.6039913 C30.7162525,24.3471763 29.2570859,25.7636503 27.4665051,25.7636503 L16.5922576,25.7636503 C15.7966061,25.7636503 15.2321717,25.0062977 15.4770404,24.2673006 L17.9222929,16.8872197 C18.2641818,15.8555405 19.5288788,15.4383092 20.4404394,16.0579538 C22.1708333,17.2342977 24.2155556,18.3406561 26.4774141,18.9472254 C27.686904,19.2722601 28.8996566,19.4315925 30.0830455,19.4315925 C30.300096,19.4315925 30.5155152,19.426815 30.7310202,19.4156676 L30.7310202,22.5769191 Z M27.4665051,0.0356213873 L11.0481111,0.0356213873 C11.9295354,0.580586705 12.8174848,1.19562139 13.7119596,1.88231792 C14.2799141,2.3189104 14.8300101,2.76665029 15.3669697,3.2223526 L27.4665051,3.2223526 C29.2668737,3.2223526 30.7310202,4.65315896 30.7310202,6.40908382 L30.7310202,16.2225665 C29.640702,16.2974971 28.493202,16.1843468 27.3408081,15.875237 C24.0944091,15.0036445 21.2380657,12.771315 19.3724444,11.1668439 C18.396404,10.3286936 17.4251717,9.42852023 16.4833889,8.55692775 C14.9622323,7.14673988 13.388702,5.68886127 11.6945404,4.38713006 C11.1477071,3.96805491 10.607399,3.57923699 10.0704394,3.2223526 C8.80531313,2.37758092 7.56233838,1.70161272 6.33207071,1.19059249 C4.69071212,0.508757225 2.76370202,0.928 1.59576768,2.2441474 C1.58872727,2.25202601 1.58177273,2.25998844 1.57481818,2.26795087 C1.27448485,2.61050289 1.0100404,2.98331214 0.789727273,3.38327746 C1.98118687,3.32594798 3.14817677,3.47413295 4.23205556,3.81190751 C4.3250404,3.84375723 4.41811111,3.87560694 4.51118182,3.91072543 C4.8800303,4.04608671 5.25377273,4.20231792 5.62914646,4.37757514 C6.93333838,4.98305491 8.27659596,5.81793642 9.67540404,6.89185838 C11.252197,8.10122543 12.7015758,9.44603757 14.2375,10.867289 C15.2884949,11.8427283 15.6732273,13.3202197 15.2269343,14.667211 L11.9749545,24.4822023 C11.7218434,25.2460925 10.9931616,25.7636503 10.1706364,25.7636503 L6.53340909,25.7636503 C4.73312626,25.7636503 3.2689798,24.3327601 3.2689798,22.5769191 L3.2689798,6.86319364 C2.49702525,6.61619075 1.64659596,6.51586416 0.792989899,6.57637861 C0.531808081,6.59389595 0.268994949,6.62733815 0.00463636364,6.67519653 L0.00463636364,22.5769191 C0.00463636364,26.0968988 2.92769192,28.9503815 6.53340909,28.9503815 L27.4665051,28.9503815 C31.0672424,28.9503815 33.9953636,26.0903613 33.9953636,22.5769191 L33.9953636,6.40908382 C33.9953636,2.89572543 31.0672424,0.0356213873 27.4665051,0.0356213873 L27.4665051,0.0356213873 Z" id="Fill-1" fill="url(#linearGradient-8)" mask="url(#mask-7)"></path>
                </g>
                <g id="Telios-Name" transform="translate(44.000000, 7.527163)">
                    <g id="T">
                        <mask id="mask-10" fill="white">
                            <use href="#path-9"></use>
                        </mask>
                        <g id="Clip-5"></g>
                        <polyline id="Fill-4" fill="#FFFFFF" mask="url(#mask-10)" points="0 2.39965217 4.5778209 2.39965217 4.5778209 13.9315652 7.33916418 13.9315652 7.33916418 2.39965217 11.9169851 2.39965217 11.9169851 0.0307826087 0 0.0307826087 0 2.39965217"></polyline>
                    </g>
                    <polyline id="Fill-7" fill="#FFFFFF" points="19.8001946 7.96645794 25.8645352 7.96645794 25.8645352 5.75714849 19.8001946 5.75714849 19.8001946 2.38577747 26.8167617 2.38577747 26.8167617 0 17 0 17 14 27 14 27 11.6142225 19.8001946 11.6142225 19.8001946 7.96645794"></polyline>
                    <polyline id="Fill-8" fill="#FFFFFF" points="34.7608812 0 32 0 32 14 42 14 42 11.6142225 34.7608812 11.6142225 34.7608812 0"></polyline>
                    <polygon id="Fill-9" fill="#FFFFFF" points="47 14 50 14 50 0 47 0"></polygon>
                    <path d="M66.1392651,8.68205204 C65.9698691,9.23375406 65.7195662,9.72957767 65.3884399,10.1696093 C65.0573969,10.6096408 64.6503631,10.9642571 64.1687551,11.2286215 C63.6872304,11.4946268 63.1343811,11.6276295 62.5087073,11.6276295 C61.8956986,11.6276295 61.3491818,11.4979087 60.8676571,11.2384671 C60.3861325,10.9790256 59.9790154,10.6358959 59.6479724,10.2089919 C59.3169293,9.78053324 59.0635435,9.28799151 58.8876483,8.73136667 C58.7134195,8.17318725 58.6263468,7.59687111 58.6263468,7.00077729 C58.6263468,6.42947033 58.7102532,5.86964997 58.8798159,5.31794796 C59.0476288,4.76797325 59.2947654,4.27543152 59.6194758,3.84032276 C59.9458527,3.40685494 60.3513034,3.0555206 60.8391606,2.78951524 C61.3271012,2.52515083 61.8830335,2.39214815 62.5087073,2.39214815 C63.1091341,2.39214815 63.6508182,2.51858706 64.1323429,2.77146488 C64.6122844,3.02425633 65.0194015,3.36419045 65.3504445,3.79100813 C65.6830707,4.21955312 65.9381229,4.71209485 66.1202674,5.2687197 C66.3008287,5.82698548 66.3927342,6.40321526 66.3927342,7.00077729 C66.3927342,7.57052967 66.3071613,8.13043639 66.1392651,8.68205204 Z M67.217967,2.21656735 C66.6540357,1.55483584 65.9762016,1.02127056 65.1825483,0.612416873 C64.3873118,0.203563189 63.5098353,0 62.546786,0 C61.6090668,0 60.7393394,0.192076594 59.9394369,0.573034262 C59.1378678,0.955546508 58.4472853,1.4711478 57.8660227,2.1196654 C57.2845935,2.768183 56.8284824,3.51360255 56.495773,4.35575132 C56.1647299,5.19807282 56,6.07977693 56,7.00077729 C56,7.88092682 56.1552311,8.74285327 56.4688596,9.58672934 C56.7809049,10.4290508 57.2212679,11.1777523 57.7915318,11.8311927 C58.3601292,12.4862741 59.0412963,13.0116346 59.8365327,13.4073608 C60.6301027,13.8030006 61.5139118,14 62.4897096,14 C63.4274287,14 64.2970728,13.8079234 65.0969754,13.4270521 C65.8985444,13.0444535 66.5859607,12.5322205 67.160974,11.8902666 C67.7359873,11.2483128 68.1858492,10.509457 68.5121428,9.67378564 C68.8368532,8.83802791 69,7.95969205 69,7.03860532 C69,6.17002875 68.8431858,5.31466607 68.5311404,4.47243094 C68.217512,3.63010944 67.7803152,2.87812612 67.217967,2.21656735 L67.217967,2.21656735 Z" id="Fill-10" fill="#FFFFFF"></path>
                    <path d="M84.6855177,8.31792685 C84.4768499,7.88468178 84.1788276,7.51345174 83.7931056,7.20449477 C83.4089513,6.89373153 82.9370972,6.63534992 82.3824205,6.42943594 C81.8261761,6.22334994 81.2086203,6.02878962 80.5298402,5.84893744 C80.0066901,5.71974663 79.5446772,5.59709278 79.1473723,5.48106189 C78.7484126,5.36494498 78.4189508,5.23575418 78.1573322,5.09348947 C77.8957136,4.95122476 77.6954064,4.7859947 77.5579782,4.59960557 C77.4222048,4.41166821 77.3526198,4.17616593 77.3526198,3.89163651 C77.3526198,3.40274134 77.536467,3.02007164 77.9023324,2.75025036 C78.2681979,2.47888085 78.8228746,2.3431531 79.5679303,2.3431531 C79.9868336,2.3431531 80.3990309,2.39544871 80.8030418,2.49849171 C81.2086203,2.60153471 81.584414,2.72745704 81.93051,2.87617269 C82.2781736,3.02506036 82.5711447,3.17549626 82.8129938,3.33074886 C83.0546688,3.48608747 83.2218818,3.60874133 83.312978,3.69871043 L84.5099441,1.5305068 C83.8956977,1.11678657 83.1755499,0.758716447 82.3527228,0.454576173 C81.5298086,0.152070137 80.6275553,0 79.6473564,0 C78.9404462,0 78.2814356,0.0932375727 77.6672763,0.281174931 C77.0512881,0.467650076 76.5133327,0.742374068 76.0496651,1.10379868 C75.584517,1.46513728 75.2218739,1.91635897 74.9603423,2.45927 C74.6987237,3.00209502 74.5679144,3.62181523 74.5679144,4.31843064 C74.5679144,4.84818176 74.6507371,5.30275793 74.8128988,5.6837934 C74.9768024,6.06474285 75.2218739,6.39993365 75.5496809,6.69100002 C75.8758333,6.98043215 76.2848083,7.23227681 76.7748642,7.44644799 C77.2650072,7.65898493 77.8426757,7.85517949 78.5099599,8.03666591 C79.0579307,8.19200452 79.5546926,8.33426923 80.0000713,8.46191181 C80.4437952,8.59101661 80.8228984,8.73328132 81.1373806,8.88861993 C81.4502953,9.04395854 81.6921445,9.22381072 81.8626669,9.43144495 C82.0331892,9.63753095 82.1175795,9.8892896 82.1175795,10.1852587 C82.1175795,11.128816 81.372611,11.5996486 79.8824996,11.5996486 C79.3460247,11.5996486 78.8228746,11.5359133 78.3129622,11.4067225 C77.8047044,11.2775317 77.3393821,11.1189246 76.9222206,10.9309012 C76.5033173,10.7445121 76.1407613,10.5564027 75.8328108,10.3700136 C75.5266021,10.1836244 75.3129701,10.0315543 75.1953985,9.9154374 L74,12.2193688 C74.8095894,12.7867934 75.7251675,13.2266614 76.7450794,13.5357044 C77.7649914,13.8463816 78.7963992,14 79.8426995,14 C80.5232214,14 81.1722167,13.9264593 81.7947366,13.7777436 C82.4139471,13.6305762 82.9635726,13.3934397 83.4404779,13.0713228 C83.917209,12.7491199 84.2963992,12.3256803 84.5777873,11.8024661 C84.8593495,11.2792519 85,10.6512745 85,9.9154374 C85,9.2827293 84.8957532,8.7496237 84.6855177,8.31792685" id="Fill-11" fill="#FFFDFD"></path>
                </g>
            </g>
        </g>
    </g>
    </svg>
    </div> 
    );
}

WavyHeader.defaultProps = {
  className: ''
};

export default WavyHeader;
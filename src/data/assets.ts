/**
 * Central asset registry.
 *
 * Every image was downloaded directly from the original Erie Framer site and
 * stored under /public/assets with its original content hash. We map each hash
 * to a semantic name here so the rest of the app reads cleanly.
 */
const base = "/assets";

export const img = {
  // brand / structural
  erieIcon: `${base}/c4TIDdYkeigWwM96dMGIRZdXqA.png`,
  erieIconAlt: `${base}/HbXB0PyBDEEGwIEeJgzHRi1E.png`,

  // partner logos (Backed by industry leaders)
  logo1: `${base}/4J2wJ3Tf6qo5ZzAuYXy5tZii7rg.png`,
  logo2: `${base}/8v19ftDJZDy3u2BKlUy0hXO8q4.png`,
  logo3: `${base}/PkCNJdkHqJPmDTDgI2yX0HAHDVA.png`,
  logo4: `${base}/UxuvH786z4PJoQbFoBPofHGwk.png`,
  logo5: `${base}/zzCgi1uHeiwHUgrmx9PZ4Xitk.png`,
  wired: `${base}/gujCzxVO0sBpp8N7FdR3Pki9I.png`,

  // clouds (transparent PNGs)
  cloudBandA: `${base}/aX4ZGLhgu0JBZg9AtTPFsQJFFb4.png`,
  cloudBandB: `${base}/enLhtsmsVPvlOjMwzPQTNiT2epE.png`,
  cloudPuff: `${base}/l8hWa2xhdgtBOs7hv4dBlzI7So.png`,

  // award
  laurel: `${base}/nRwQlHODv5nq5Cv9IfjQTHVkfiQ.png`,

  // generated content imagery
  helmetWoman: `${base}/CksNYRDGXihZgPXbSNZDpe1hSE.jpg`, // hero — goldfish helmet
  jungleWoman: `${base}/Xf06PGeC4oXkJ3rJV1m0YMozbM.jpg`,
  frecklesFace: `${base}/J1V4RtNzOoOVvmMh7t7tvA4rXWo.jpg`,
  skincareOrchid: `${base}/FHM70jivyZwRq3jjPvzos5M3iAo.jpg`,
  skincareRock: `${base}/n6zzU6R9ALdlp1x1L7mritnYaI.jpg`,
  skincareRock2: `${base}/E6IGDD1fHG51UE1lnOj6BhG3lME.jpg`,
  houseNight: `${base}/blFc1muMVwdahbxiK9NZ5rWs.jpg`,
  archInterior: `${base}/9WhYlRodIUJ4FhiGhm2Yctkup0.jpg`,
  villaPool: `${base}/e4L65Mj6GxCSkBAMAUOfVuXn6C4.jpg`,
  bedroomOcean: `${base}/wCj4I8dtYmrbWN5KL3FvLzpKe0.jpg`,
  tigerGarden: `${base}/iXLeuUkhswur67tQZu1EK9bqI.jpg`,
  doorField: `${base}/9LuQycnxKCoKQV4071GJK97jTuw.jpg`,
  phoenix: `${base}/roUkqJgAIAwtehL0u2b8H5fLCE.jpg`,
  airplane: `${base}/vNKtdb55GDvr37BCl8rIk8BlvQY.jpg`,
  blueFlower: `${base}/zXedkkGW1UXhrO9oj8u4XHrLIc.jpg`,
  koiPond: `${base}/YGUGb4E427tc2akJoxXKzZbo6E.jpg`,
  catDaisies: `${base}/NGexHfqvGwwPBKiDcqoGqLypzg.jpg`,
  catFlowers: `${base}/5EtQ0D5fa9ehiQJhRS9EkET9k.jpg`,
  arGlasses: `${base}/am9bJzC3c9iWzBbHK253cNFO90.jpg`,
  twins: `${base}/xD2m8yQBbiFQpPKzklUeZlpjOs.jpg`,
  glassMan: `${base}/6gzMhuK715u4mvXIkHgpybWM.jpg`,
  tennisRed: `${base}/3mf5dQawdlm1nkcLNYATJ5O21bY.jpg`,
  tennisYellow: `${base}/YdcTGxcQBq8JSnUDCudJ7SAOM.jpg`,
  tennisCourt: `${base}/XsLwrGjhhwdY6uQn9Wb8YjHJCmg.jpg`,
  mustang: `${base}/9YaPeLqSMVD8w2mr6HSdMwksJZg.jpg`,
  cyberWoman: `${base}/KBny8vs8Ig5cSPAb4st9UiLcqWk.jpg`,
  diamondRing: `${base}/QXkfkSGFFAIS6jmG2NjwZgCN2o.jpg`,
  sneaker: `${base}/D3Qaw6El9of6y3gNc8cX30xITI.jpg`,
  perfumeBlue: `${base}/EljYBryQwDxmlVfeo3zBFQjqb48.jpg`,
  manOrange: `${base}/HHQCleJhqgSFIbBJbotPMwepxjk.jpg`,
  manOrangeRed: `${base}/PMp4Y38qfFTlfbc6DHWb5WiHt3Y.jpg`,
  womanTeal: `${base}/5FuaQeYH4VEck2O7mEMGrHRxMvg.jpg`,
  womanWhiteSuit: `${base}/erXPLaeslHtl64XUyNfw6xRAs8A.jpg`,
  womanYellow: `${base}/gZcSykYfmbPW4uYkJq87eZcME8.jpg`,
  womanPoppies: `${base}/goJkJ5tmIwJvnzQDqq7OdEcrb7M.jpg`,
  womanBlackTurtleneck: `${base}/eO4JCa5QHSUZIOlVmda7QWX9M.jpg`,
  manCurlySky: `${base}/ztxgIj2blLkrJkZdDGok4bFxP44.jpg`,
  smilingMan: `${base}/cNMAXEqnTqsAppxm8fRBMTkm0.jpg`,
} as const;

export const partnerLogos = [img.logo1, img.logo2, img.logo3, img.logo4, img.logo5];

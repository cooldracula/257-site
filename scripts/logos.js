const logos=[
     "animals-aoteroa.png",
     "arts-access-aotearoa.png",
     "badass-careers.png",
     "be-connected.png",
     "binge-culture.png",
     "bloomhq.png",
     "boring.png",
     "bpm.png",
     "circularity.png",
     "coliberate.png",
     "consentire.png",
     "creative-mornings.png",
     "delivery-associates.png",
     "design-tree.png",
     "five-and-dime.png",
     "generation-zero.png",
     "global-big-fund.png",
     "humble-bee-bio.png",
     "inside-out.png",
     "inspiring-stories.png",
     "invisible-agency.png",
     "kowtow.png",
     "ministry-bie.png",
     "ministry-of-education.png",
     "ministry-pi.png",
     "new-zealand-alternative.png",
     "nonstop-solutions.png",
     "nurture.png",
     "nz-fabian-society.png",
     "oxfam-aotearoa.png",
     "posboss.png",
     "ry.png",
     "saymyname.png",
     "sharesies.png",
     "summer-of-tech.png",
     "sustainable-business-network.png",
     "the-atom.png",
     "the-well.png",
     "urban-dream-brokerage.png",
     "waka-kotahi.png",
     "wellington-city-council.png",
     "xframe.png"
   ]

const logosSelector = ".community-item > img";
const logoAssetPath = "/aesthetic/assets/logos";

function setLogos () {
  const logoIndex = Math.floor(Math.random() * logos.length);
  const logoImgs=document.querySelectorAll(logosSelector);

  for(i=0; i < logoImgs.length; i++) {
    newIdx = (logoIndex + i) % logos.length;
    const newSrc = `${logoAssetPath}/${logos[newIdx]}`
    logoImgs[i].src = newSrc;
  }
}

document.addEventListener('DOMContentLoaded', setLogos);

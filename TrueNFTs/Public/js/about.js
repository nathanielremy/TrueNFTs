const teamBios = {
  "Remy" : "Nathaniel is an experienced programmer with a bachelor's degree in Computer Science & Entrepreneurship from Harbour Space in Barcelona, Spain. He has experience in mobile app development, CRM construction, and is completing a masters in Artificial Intelligence and Machine Learning at MIT.  He has since dedicated his high-level understanding of the digital world to the crypto and NFT space. Nathaniel - or Remy as as his friends call him - is a highly intelligent and creative individual. He speaks 4 languages, if anyone cares.",

  "Damon" : "Damon recently received a bachelor’s degree in Finance and Accounting from McGill University in Montreal, Canada. Having already held positions at several elite investment firms, he has learned from the best and understands how to make calculated risks, when the time is right. Damon is effectively a ‘numbers guy’. His experience analyzing companies and studying their every move has given him the arsenal of skills to bring the True NFT vision to the grand stage. He’s also handsome, and tall.",
  
  "Jordan" : "Jordan is an audio engineer with experience in marketing and creative direction in the NFT and crypto spaces. Well-acquainted with the corporate world from his time in the music industry, Jordan now wants to use his keen eye for detail and unconventional creativity to help bridge the gap between the digital and physical realms. For Jordan, becoming part of TrueNFTs is an opportunity for him to put his diverse skill-set into action"
};

const teamMemberBioContainer = document.createElement('div');
teamMemberBioContainer.id = "teamMemberBioContainer";

const teamMemberBio = document.createElement('p');
teamMemberBio.id = "teamMemberBio";
teamMemberBioContainer.appendChild(teamMemberBio);

const infoButtons = document.getElementsByClassName('infoButton');
// Add the teamMemberBio over the correct team member when selected.
for (var item = 0; item < infoButtons.length; item++) {

  const selectedItem = infoButtons[item];

  selectedItem.addEventListener('click', (e) => {
    // Use the ID of the button to figure out which bio to show
    const selectedTeamMember = document.querySelector("." + selectedItem.id + "Bio");

    //Calcuate current height of div
    const selectedDivHeight = selectedTeamMember.clientHeight;
    const selectedDivWidth = selectedTeamMember.clientWidth;

    teamMemberBio.innerText = teamBios[selectedItem.id];

    //Set the top of Bio at top of div
    // teamMemberBioContainer.style.maxHeight = "" + selectedDivHeight + "px";
    teamMemberBioContainer.style.minHeight = "" + (selectedDivHeight) + "px";
    teamMemberBioContainer.style.marginTop = "" + -(selectedDivHeight) + "px";
    teamMemberBioContainer.style.maxWidth = "" + selectedDivWidth + "px";
    teamMemberBioContainer.style.minWidth = "" + selectedDivWidth + "px";

    selectedTeamMember.appendChild(teamMemberBioContainer);
    teamMemberBioContainer.classList.add('active');
  });
}

//Remove the team member's bio
teamMemberBioContainer.addEventListener('click', (e) => {
  teamMemberBioContainer.classList.remove('active');
});

// ***********************************************************************************
// ************************************   BEGIN   ************************************
// ***********************************************************************************

function main()
{
  "use script";
  currGPS = GPS[5];
  Creator(Design.EN);
  trackMasks();
  trackNowButton();
  trackTips();
  autoStaff();
  // showDemo();
}
$(document).ready(main);
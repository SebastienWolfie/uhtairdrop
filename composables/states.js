import Date from '../utils/Date'

export const useAuth = () =>
  useState(() => ({
      uhtbalance: 0,
      claimedAddresses: [],
      walletAddress: "",
      isWalletConnected: false,
      hasMintedNFT: true,
      hasClaimedPoints: false,
      hasClaimedWelcomeUHT: false,
      hasClaimedNFTMintBonus: false,
      hasClaimedSeptember25Gift: false,
      hasClaimedWelcomeBonusPoint: false,
      points: 0,
      allocation: 0,
      isAirdropEligible: false,
      lastAnsweredQuestionID: null,
      lastAnswerID: null,
      email: "p",
      username: "",
      nominationCountSlot: 0,
      referrals: [],
      lastDailyClaimAt: null,
      addressSignature: null,


      testAddress: ''
  }));
  


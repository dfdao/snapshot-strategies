import { readFileSync } from 'fs';
import path from 'path';

import * as nounsPower from './nouns-rfp-power';
import * as erc20Votes from './erc20-votes';
import * as antiWhale from './anti-whale';
import * as balancer from './balancer';
import * as balancerErc20InternalBalanceOf from './balancer-erc20-internal-balance-of';
import * as sunder from './sunder';
import * as balancerSmartPool from './balancer-smart-pool';
import * as contractCall from './contract-call';
import * as dextfVaults from './dextf-staked-in-vaults';
import * as dfynFarms from './dfyn-staked-in-farms';
import * as dfynVaults from './dfyn-staked-in-vaults';
import * as vDfynVault from './balance-in-vdfyn-vault';
import * as ensDomainsOwned from './ens-domains-owned';
import * as ensReverseRecord from './ens-reverse-record';
import * as governorDelegator from './governor-delegator';
import * as erc20BalanceOf from './erc20-balance-of';
import * as erc20BalanceOfCoeff from './erc20-balance-of-coeff';
import * as erc20BalanceOfFixedTotal from './erc20-balance-of-fixed-total';
import * as erc20BalanceOfCv from './erc20-balance-of-cv';
import * as erc20WithBalance from './erc20-with-balance';
import * as erc20BalanceOfDelegation from './erc20-balance-of-delegation';
import * as erc20BalanceOfQuadraticDelegation from './erc20-balance-of-quadratic-delegation';
import * as erc20BalanceOfWeighted from './erc20-balance-of-weighted';
import * as erc20Price from './erc20-price';
import * as balanceOfWithMin from './balance-of-with-min';
import * as balanceOfWithThresholds from './balance-of-with-thresholds';
import * as ethBalance from './eth-balance';
import * as ethWithBalance from './eth-with-balance';
import * as ethWalletAge from './eth-wallet-age';
import * as multichain from './multichain';
import * as makerDsChief from './maker-ds-chief';
import * as uni from './uni';
import * as yearnVault from './yearn-vault';
import * as fraxFinance from './frax-finance';
import * as moloch from './moloch';
import * as uniswap from './uniswap';
import * as faralandStaking from './faraland-staking';
import * as flashstake from './flashstake';
import * as pancake from './pancake';
import * as synthetix from './synthetix';
import * as aelinCouncil from './aelin-council';
import * as synthetixQuadratic from './synthetix-quadratic';
import * as synthetixNonQuadratic from './synthetix-non-quadratic';
import * as ctoken from './ctoken';
import * as cream from './cream';
import * as esd from './esd';
import * as esdDelegation from './esd-delegation';
import * as stakedUniswap from './staked-uniswap';
import * as piedao from './piedao';
import * as ethReceived from './eth-received';
import * as erc20Received from './erc20-received';
import * as ethPhilanthropy from './eth-philanthropy';
import * as xDaiEasyStaking from './xdai-easy-staking';
import * as xDaiPOSDAOStaking from './xdai-posdao-staking';
import * as xDaiStakeHolders from './xdai-stake-holders';
import * as xDaiStakeDelegation from './xdai-stake-delegation';
import * as defidollar from './defidollar';
import * as aavegotchi from './aavegotchi';
import * as aavegotchiAgip from './aavegotchi-agip';
import * as mithcash from './mithcash';
import * as dittomoney from './dittomoney';
import * as balancerUnipool from './balancer-unipool';
import * as sushiswap from './sushiswap';
import * as masterchef from './masterchef';
import * as stablexswap from './stablexswap';
import * as stakedKeep from './staked-keep';
import * as typhoon from './typhoon';
import * as delegation from './delegation';
import * as ticket from './ticket';
import * as work from './work';
import * as ticketValidity from './ticket-validity';
import * as opium from './opium';
import * as ocean from './ocean-marketplace';
import * as theGraphBalance from './the-graph-balance';
import * as theGraphDelegation from './the-graph-delegation';
import * as theGraphIndexing from './the-graph-indexing';
import * as whitelist from './whitelist';
import * as whitelistWeighted from './whitelist-weighted';
import * as tokenlon from './tokenlon';
import * as rebased from './rebased';
import * as pobHash from './pob-hash';
import * as totalAxionShares from './total-axion-shares';
import * as erc1155BalanceOf from './erc1155-balance-of';
import * as erc1155BalanceOfCv from './erc1155-balance-of-cv';
import * as erc1155WithMultiplier from './erc1155-with-multiplier';
import * as compLikeVotes from './comp-like-votes';
import * as governorAlpha from './governor-alpha';
import * as pagination from './pagination';
import * as rulerStakedToken from './ruler-staked-token';
import * as rulerStakedLP from './ruler-staked-lp';
import * as xcover from './xcover';
import * as niuStaked from './niu-staked';
import * as mushrooms from './mushrooms';
import * as curioCardsErc20Weighted from './curio-cards-erc20-weighted';
import * as saffronFinance from './saffron-finance';
import * as saffronFinanceV2 from './saffron-finance-v2';
import * as renNodes from './ren-nodes';
import * as multisigOwners from './multisig-owners';
import * as trancheStaking from './tranche-staking';
import * as pepemon from './pepemon';
import * as erc1155AllBalancesOf from './erc1155-all-balances-of';
import * as trancheStakingLP from './tranche-staking-lp';
import * as masterchefPoolBalance from './masterchef-pool-balance';
import * as masterchefPoolBalancePrice from './masterchef-pool-balance-price';
import * as avnBalanceOfStaked from './avn-balance-of-staked';
import * as badgeth from './badgeth';
import * as api from './api';
import * as apiPost from './api-post';
import * as xseen from './xseen';
import * as molochAll from './moloch-all';
import * as molochLoot from './moloch-loot';
import * as erc721Enumerable from './erc721-enumerable';
import * as erc721WithMultiplier from './erc721-with-multiplier';
import * as erc721WithTokenId from './erc721-with-tokenid';
import * as hoprUniLpFarm from './hopr-uni-lp-farm';
import * as erc721 from './erc721';
import * as erc721MultiRegistry from './erc721-multi-registry';
import * as apescape from './apescape';
import * as liftkitchen from './liftkitchen';
import * as coordinape from './coordinape';
import * as decentralandEstateSize from './decentraland-estate-size';
import * as iotexBalance from './iotex-balance';
import * as iotexStakedBalance from './iotex-staked-balance';
import * as xrc20BalanceOf from './xrc20-balance-of';
import * as brightid from './brightid';
import * as inverseXINV from './inverse-xinv';
import * as modefi from './modefi';
import * as modefiStaking from './modefi-staking';
import * as spookyswap from './spookyswap';
import * as rnbwBalance from './rnbw-balance';
import * as celerSgnDelegation from './celer-sgn-delegation';
import * as balancerDelegation from './balancer-delegation';
import * as infinityProtocolPools from './infinityprotocol-liquidity-pools';
import * as aaveGovernancePower from './aave-governance-power';
import * as cake from './cake';
import * as aks from './aks';
import * as tomyumswap from './tomyumswap';
import * as planetFinance from './planet-finance';
import * as impossibleFinance from './impossible-finance';
import * as ogn from './ogn';
import * as zrxVotingPower from './zrx-voting-power';
import * as tombFinance from './tomb-finance';
import * as trancheStakingSLICE from './tranche-staking-slice';
import * as unipoolSameToken from './unipool-same-token';
import * as unipoolUniv2Lp from './unipool-univ2-lp';
import * as poapWithWeight from './poap-with-weight';
import * as uniswapV3 from './uniswap-v3';
import * as uniswapV3Staking from './uniswap-v3-staking';
import * as l2Deversifi from './l2-deversifi';
import * as vestedDeversifi from './vested-deversifi';
import * as biswap from './biswap';
import * as honeyswap from './honeyswap';
import * as eglVote from './egl-vote';
import * as mcnFarm from './mcn-farm';
import * as snowswap from './snowswap';
import * as meebitsdao from './meebitsdao';
import * as holdsTokens from './holds-tokens';
import * as crucibleERC20BalanceOf from './crucible-erc20-balance-of';
import * as hasrock from './has-rock';
import * as flexaCapacityStaking from './flexa-capacity-staking';
import * as sunriseGamingUniv2Lp from './sunrisegaming-univ2-lp';
import * as sunriseGamingStaking from './sunrisegaming-staking';
import * as singleStakingPoolsBalanceOf from './single-staking-pools-balanceof';
import * as occStakeOf from './occ-stake-of';
import * as hoprStaking from './hopr-staking';
import * as hoprBridgedBalance from './hopr-bridged-balance';
import * as lootCharacterGuilds from './loot-character-guilds';
import * as swapr from './swapr';
import * as cyberkongz from './cyberkongz';
import * as compLikeVotesInclusive from './comp-like-votes-inclusive';
import * as mstable from './mstable';
import * as hashesVoting from './hashes-voting';
import * as podLeader from './pod-leader';
import * as aavegotchiWagmiGuild from './aavegotchi-wagmi-guild';
import * as polisBalance from './polis-balance';
import * as techQuadraticRankedChoice from './tech-quadratic-ranked-choice';
import * as mutantCatsStakersAndHolders from './mutant-cats-stakers-and-holders';
import * as vaultTokenLpBalance from './vault-token-lp-balance';
import * as singleStakingVaultBalanceOf from './single-staking-vault-balanceof';
import * as svsStaking from './svs-staking';
import * as mcbBalanceFromGraph from './mcb-balance-from-graph';
import * as colonyReputation from './colony-reputation';
import * as radicleCommunityTokens from './radicle-community-tokens';
import * as digitalaxMonaQuickswap from './digitalax-mona-quickswap';
import * as digitalaxGenesisContribution from './digitalax-genesis-contribution';
import * as digitalaxLPStakers from './digitalax-lp-stakers';
import * as galaxyNftWithScore from './galaxy-nft-with-score';
import * as vesper from './vesper';
import * as thales from './thales';
import * as bscMvb from './bsc-mvb';
import * as coinswap from './coinswap';
import * as dgenesis from './dgenesis';
import * as votePowerAndShare from './vote-power-and-share';
import * as blockzerolabsCryptonauts from './blockzerolabs-cryptonauts';
import * as math from './math';
import * as pushVotingPower from './push-voting-power';
import * as stakedPSPBalance from './staked-psp-balance';
import * as erc20BalanceOfContractMultiplier from './erc20-balance-of-contract-multiplier';
import * as agave from './agave';
import * as juicebox from './juicebox';
import * as snetFarmers from './snet-farmers';
import * as snetStakers from './snet-stakers';
import * as snetLiquidityProviders from './snet-liquidity-providers';
import * as minMaxMcnFarm from './minmax-mcn-farm';
import * as unstackedToadzAndStackedToadzStakers from './unstackedtoadz-and-stackedtoadz-stakers';
import * as lydiaGovVault from './lydia-gov-vault';
import * as xkawaFarm from './xkawa-farm';

const strategies = {
  'nouns-rfp-power': nounsPower,
  coordinape,
  'anti-whale': antiWhale,
  balancer,
  sunder,
  'balancer-smart-pool': balancerSmartPool,
  'balancer-erc20-internal-balance-of': balancerErc20InternalBalanceOf,
  'balance-in-vdfyn-vault': vDfynVault,
  'erc20-received': erc20Received,
  'contract-call': contractCall,
  'dextf-staked-in-vaults': dextfVaults,
  'dfyn-staked-in-farms': dfynFarms,
  'dfyn-staked-in-vaults': dfynVaults,
  'eth-received': ethReceived,
  'eth-philanthropy': ethPhilanthropy,
  'ens-domains-owned': ensDomainsOwned,
  'ens-reverse-record': ensReverseRecord,
  'governor-delegator': governorDelegator,
  'erc20-balance-of': erc20BalanceOf,
  'erc20-votes': erc20Votes,
  'erc20-balance-of-fixed-total': erc20BalanceOfFixedTotal,
  'erc20-balance-of-cv': erc20BalanceOfCv,
  'erc20-balance-of-coeff': erc20BalanceOfCoeff,
  'erc20-with-balance': erc20WithBalance,
  'erc20-balance-of-delegation': erc20BalanceOfDelegation,
  'erc20-balance-of-quadratic-delegation': erc20BalanceOfQuadraticDelegation,
  'erc20-balance-of-weighted': erc20BalanceOfWeighted,
  'erc20-price': erc20Price,
  'balance-of-with-min': balanceOfWithMin,
  'balance-of-with-thresholds': balanceOfWithThresholds,
  'eth-balance': ethBalance,
  'eth-with-balance': ethWithBalance,
  'eth-wallet-age': ethWalletAge,
  'maker-ds-chief': makerDsChief,
  erc721,
  'erc721-enumerable': erc721Enumerable,
  'erc721-with-multiplier': erc721WithMultiplier,
  'erc721-with-tokenid': erc721WithTokenId,
  'erc721-multi-registry': erc721MultiRegistry,
  'erc1155-balance-of': erc1155BalanceOf,
  'erc1155-balance-of-cv': erc1155BalanceOfCv,
  multichain,
  uni,
  'frax-finance': fraxFinance,
  'yearn-vault': yearnVault,
  moloch,
  masterchef,
  sushiswap,
  uniswap,
  'faraland-staking': faralandStaking,
  flashstake,
  pancake,
  synthetix,
  'aelin-council': aelinCouncil,
  'synthetix-quadratic': synthetixQuadratic,
  'synthetix-non-quadratic': synthetixNonQuadratic,
  ctoken,
  cream,
  'staked-uniswap': stakedUniswap,
  esd,
  'esd-delegation': esdDelegation,
  piedao,
  'xdai-easy-staking': xDaiEasyStaking,
  'xdai-posdao-staking': xDaiPOSDAOStaking,
  'xdai-stake-holders': xDaiStakeHolders,
  'xdai-stake-delegation': xDaiStakeDelegation,
  defidollar,
  aavegotchi,
  'aavegotchi-agip': aavegotchiAgip,
  mithcash,
  stablexswap,
  dittomoney,
  'staked-keep': stakedKeep,
  'balancer-unipool': balancerUnipool,
  typhoon,
  delegation,
  ticket,
  work,
  'ticket-validity': ticketValidity,
  opium,
  'ocean-marketplace': ocean,
  'the-graph-balance': theGraphBalance,
  'the-graph-delegation': theGraphDelegation,
  'the-graph-indexing': theGraphIndexing,
  whitelist,
  'whitelist-weighted': whitelistWeighted,
  tokenlon,
  rebased,
  'pob-hash': pobHash,
  'total-axion-shares': totalAxionShares,
  'comp-like-votes': compLikeVotes,
  'governor-alpha': governorAlpha,
  pagination,
  'ruler-staked-token': rulerStakedToken,
  'ruler-staked-lp': rulerStakedLP,
  xcover,
  'niu-staked': niuStaked,
  mushrooms: mushrooms,
  'curio-cards-erc20-weighted': curioCardsErc20Weighted,
  'ren-nodes': renNodes,
  'multisig-owners': multisigOwners,
  'tranche-staking': trancheStaking,
  pepemon,
  'erc1155-all-balances-of': erc1155AllBalancesOf,
  'erc1155-with-multiplier': erc1155WithMultiplier,
  'saffron-finance': saffronFinance,
  'saffron-finance-v2': saffronFinanceV2,
  'tranche-staking-lp': trancheStakingLP,
  'masterchef-pool-balance': masterchefPoolBalance,
  'masterchef-pool-balance-price': masterchefPoolBalancePrice,
  'avn-balance-of-staked': avnBalanceOfStaked,
  api,
  'api-post': apiPost,
  xseen,
  'moloch-all': molochAll,
  'moloch-loot': molochLoot,
  'hopr-uni-lp-farm': hoprUniLpFarm,
  apescape,
  liftkitchen,
  'decentraland-estate-size': decentralandEstateSize,
  brightid,
  'inverse-xinv': inverseXINV,
  modefi,
  'modefi-staking': modefiStaking,
  'iotex-balance': iotexBalance,
  'iotex-staked-balance': iotexStakedBalance,
  'xrc20-balance-of': xrc20BalanceOf,
  spookyswap,
  'rnbw-balance': rnbwBalance,
  'celer-sgn-delegation': celerSgnDelegation,
  'balancer-delegation': balancerDelegation,
  'infinityprotocol-liquidity-pools': infinityProtocolPools,
  'aave-governance-power': aaveGovernancePower,
  cake,
  aks,
  tomyumswap,
  'planet-finance': planetFinance,
  ogn,
  'impossible-finance': impossibleFinance,
  badgeth,
  'zrx-voting-power': zrxVotingPower,
  'tomb-finance': tombFinance,
  'tranche-staking-slice': trancheStakingSLICE,
  'unipool-same-token': unipoolSameToken,
  'unipool-univ2-lp': unipoolUniv2Lp,
  'poap-with-weight': poapWithWeight,
  'uniswap-v3': uniswapV3,
  'uniswap-v3-staking': uniswapV3Staking,
  'l2-deversifi': l2Deversifi,
  'vested-deversifi': vestedDeversifi,
  biswap,
  honeyswap,
  'egl-vote': eglVote,
  'mcn-farm': mcnFarm,
  snowswap,
  meebitsdao,
  'crucible-erc20-balance-of': crucibleERC20BalanceOf,
  'has-rock': hasrock,
  'flexa-capacity-staking': flexaCapacityStaking,
  'sunrisegaming-univ2-lp': sunriseGamingUniv2Lp,
  'sunrisegaming-staking': sunriseGamingStaking,
  'single-staking-pools-balanceof': singleStakingPoolsBalanceOf,
  'hopr-staking': hoprStaking,
  'hopr-bridged-balance': hoprBridgedBalance,
  'occ-stake-of': occStakeOf,
  swapr,
  'holds-tokens': holdsTokens,
  'loot-character-guilds': lootCharacterGuilds,
  cyberkongz: cyberkongz,
  'comp-like-votes-inclusive': compLikeVotesInclusive,
  mstable,
  'hashes-voting': hashesVoting,
  'pod-leader': podLeader,
  'aavegotchi-wagmi-guild': aavegotchiWagmiGuild,
  'polis-balance': polisBalance,
  'vault-token-lp-balance': vaultTokenLpBalance,
  'single-staking-vault-balanceof': singleStakingVaultBalanceOf,
  'mutant-cats-stakers-and-holders': mutantCatsStakersAndHolders,
  'svs-staking': svsStaking,
  'mcb-balance-from-graph': mcbBalanceFromGraph,
  'radicle-community-tokens': radicleCommunityTokens,
  'digitalax-mona-quickswap': digitalaxMonaQuickswap,
  'digitalax-genesis-contribution': digitalaxGenesisContribution,
  'digitalax-lp-stakers': digitalaxLPStakers,
  'colony-reputation': colonyReputation,
  'galaxy-nft-with-score': galaxyNftWithScore,
  vesper,
  thales,
  'tech-quadratic-ranked-choice': techQuadraticRankedChoice,
  'bsc-mvb': bscMvb,
  coinswap,
  dgenesis,
  'vote-power-and-share': votePowerAndShare,
  'blockzerolabs-cryptonauts': blockzerolabsCryptonauts,
  math,
  'push-voting-power': pushVotingPower,
  'staked-psp-balance': stakedPSPBalance,
  'erc20-balance-of-contract-multiplier': erc20BalanceOfContractMultiplier,
  agave,
  juicebox,
  'snet-farmers': snetFarmers,
  'snet-stakers': snetStakers,
  'snet-liquidity-providers': snetLiquidityProviders,
  'minmax-mcn-farm': minMaxMcnFarm,
  'unstackedtoadz-and-stackedtoadz-stakers': unstackedToadzAndStackedToadzStakers,
  'lydia-gov-vault': lydiaGovVault,
  'xkawa-farm': xkawaFarm
};

Object.keys(strategies).forEach(function (strategyName) {
  let examples = null;
  let schema = null;
  let about = '';

  try {
    examples = JSON.parse(
      readFileSync(path.join(__dirname, strategyName, 'examples.json'), 'utf8')
    );
  } catch (error) {
    examples = null;
  }

  try {
    schema = JSON.parse(
      readFileSync(path.join(__dirname, strategyName, 'schema.json'), 'utf8')
    );
  } catch (error) {
    schema = null;
  }

  try {
    about = readFileSync(
      path.join(__dirname, strategyName, 'README.md'),
      'utf8'
    );
  } catch (error) {
    about = '';
  }
  strategies[strategyName].examples = examples;
  strategies[strategyName].schema = schema;
  strategies[strategyName].about = about;
});

export default strategies;

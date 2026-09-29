export type Language = 'mr' | 'en';

export interface Crop {
  id: string;
  nameMr: string;
  nameEn: string;
  scientificName: string;
  category: 'cash' | 'fruits' | 'vegetables' | 'grains' | 'spices';
  durationMr: string;
  durationEn: string;
  idealSeasonMr: string;
  idealSeasonEn: string;
  soilTypeMr: string;
  soilTypeEn: string;
  waterNeedMr: string;
  waterNeedEn: string;
  yieldPerAcreMr: string;
  yieldPerAcreEn: string;
  puneFocusMr: string;
  puneFocusEn: string;
  varietiesMr: string[];
  varietiesEn: string[];
  seedRateMr: string;
  seedRateEn: string;
  seedTreatmentMr: string;
  seedTreatmentEn: string;
  spacingMr: string;
  spacingEn: string;
  fertilizerDoseMr: string;
  fertilizerDoseEn: string;
  keyPestsMr: string[];
  keyPestsEn: string[];
  harvestTipsMr: string;
  harvestTipsEn: string;
  storageMarketTipsMr: string;
  storageMarketTipsEn: string;
}

export interface SoilInfo {
  id: string;
  nameMr: string;
  nameEn: string;
  regionsMr: string;
  regionsEn: string;
  featuresMr: string[];
  featuresEn: string[];
  suitableCropsMr: string[];
  suitableCropsEn: string[];
  improvementTipsMr: string[];
  improvementTipsEn: string[];
}

export interface SeasonInfo {
  id: string;
  nameMr: string;
  nameEn: string;
  periodMr: string;
  periodEn: string;
  descriptionMr: string;
  descriptionEn: string;
  keyCropsMr: string[];
  keyCropsEn: string[];
  farmerTipsMr: string[];
  farmerTipsEn: string[];
}

export interface GovtScheme {
  id: string;
  titleMr: string;
  titleEn: string;
  departmentMr: string;
  departmentEn: string;
  category: 'direct_benefit' | 'subsidy' | 'insurance' | 'water_power' | 'special_grant' | 'machinery' | 'safety';
  grantTypeMr: string;
  grantTypeEn: string;
  benefitSummaryMr: string;
  benefitSummaryEn: string;
  subsidyAmountMr: string;
  subsidyAmountEn: string;
  eligibilityMr: string[];
  eligibilityEn: string[];
  requiredDocsMr: string[];
  requiredDocsEn: string[];
  applicationStepsMr: string[];
  applicationStepsEn: string[];
  puneFocusNotesMr: string;
  puneFocusNotesEn: string;
  applicationPortal: string;
  portalUrl: string;
  onlineOrOfflineMr: string;
  onlineOrOfflineEn: string;
  helpline: string;
}

export interface TalukaAgriOffice {
  id: string;
  talukaMr: string;
  talukaEn: string;
  officerDesignationMr: string;
  officerDesignationEn: string;
  addressMr: string;
  addressEn: string;
  phone: string;
  email?: string;
  jurisdictionMr: string;
  jurisdictionEn: string;
}

export interface MandiOrKvk {
  id: string;
  type: 'apmc' | 'kvk';
  nameMr: string;
  nameEn: string;
  talukaMr: string;
  talukaEn: string;
  addressMr: string;
  addressEn: string;
  phone: string;
  email?: string;
  operatingHoursMr: string;
  operatingHoursEn: string;
  specialtyMr: string;
  specialtyEn: string;
  commoditiesMr: string[];
  commoditiesEn: string[];
}

export interface PestProblem {
  id: string;
  cropNameMr: string;
  cropNameEn: string;
  problemNameMr: string;
  problemNameEn: string;
  type: 'pest' | 'disease';
  symptomsMr: string;
  symptomsEn: string;
  organicRemedyMr: string;
  organicRemedyEn: string;
  chemicalRemedyMr: string;
  chemicalRemedyEn: string;
  preventiveTipsMr: string;
  preventiveTipsEn: string;
}

export interface ModernMethod {
  id: string;
  titleMr: string;
  titleEn: string;
  taglineMr: string;
  taglineEn: string;
  advantagesMr: string[];
  advantagesEn: string[];
  guideMr: string[];
  guideEn: string[];
  costBenefitMr: string;
  costBenefitEn: string;
  subsidyDetailsMr: string;
  subsidyDetailsEn: string;
}

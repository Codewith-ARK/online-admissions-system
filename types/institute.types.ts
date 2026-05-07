export type InstituteType = 'PUBLIC' | 'PRIVATE' | 'SEMI-GOVERNMENT';

export type Eligibility = {
    isPreMedAllowed: boolean;

}

export type Program = {
    title: string;
    description: string;
    durationInMonths: number;
    feeInPKR: number;
    // eligibility: 
}

export type Institute = {
    id: string;
    title: string;
    address?: string;
    type: InstituteType;
    desc?: string;
    programs: Program[] | null;
}

export interface InstituteDetails extends Institute {

}
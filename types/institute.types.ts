export type InstituteType = 'PUBLIC' | 'PRIVATE' | 'SEMI-GOVERNMENT';

export type Eligibility = {
    isPreMedAllowed: boolean;

}

export type Program = {
    id?: number;
    title: string;
    description: string;
    durationInMonths: number;
    feeInPKR: number;
    level?: 'UNDER_GRADUATE' | 'GRADUATE' | 'POST_GRADUATE';
    financing?: 'SELF_FUNDED' | 'FULLY_FUNDED';
    // eligibility: 
}

export interface ProgramDetails extends Program {
    degree: 'Bachelor' | 'Master' | 'PhD' | 'Diploma' | 'Certificate';
    field: string;           // e.g. "Computer Science"
    seats: number;
    deadline: string;        // application deadline
    requirements: string[];  // e.g. ["FSc Pre-Engineering", "70% marks"]
    // export type Program = {
    //     id: number;
    //     title: string;
    //     duration: number;        // in years
    //     fee: number;             // per year
    //     description: string;
    //     instituteId: number;
    // }

}

export type Institute = {
    id: number;
    title: string;
    address?: string;
    type: InstituteType;
    desc?: string;
    programs: Program[] | null;
}

export interface InstituteDetails extends Institute {

}
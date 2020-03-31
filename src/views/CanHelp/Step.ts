import * as O from "fp-ts/es6/Option";
import { Step as NecessitousStep } from "../Necessitous/Step";

// export type Step = Step.Contact | Step.Outlet | Step.Supply | Step.Summary;

// export namespace Step {
//     export type Dict = Record<Step["type"], Step>;

//     export enum Paths {
//         Contact = "1",
//         Outlet = "2",
//         Supply = "3",
//         Summary = "4"
//     }

//     export enum Steps {
//         Contact = "contact",
//         Outlet = "outlet",
//         Supply = "supply",
//         Summary = "summary"
//     }

//     export const nextPath = (step: Step): O.Option<string> => {
//         switch (step.type) {
//             case Steps.Contact:
//                 return O.some(Paths.Outlet);
//             case Steps.Outlet:
//                 return O.some(Paths.Supply);
//             case Steps.Supply:
//                 return O.some(Paths.Summary);
//             default:
//                 return O.none;
//         }
//     };

//     export const prevPath = (step: Step): O.Option<string> => {
//         switch (step.type) {
//             case Steps.Summary:
//                 return O.some(Paths.Supply);
//             case Steps.Supply:
//                 return O.some(Paths.Outlet);
//             case Steps.Outlet:
//                 return O.some(Paths.Contact);
//             default:
//                 return O.none;
//         }
//     };

//     export const Contact = (data: ContactData) => ({
//         type: Steps.Contact,
//         data,
//         path: Paths.Contact
//     });
//     export type Contact = ReturnType<typeof Contact>;

//     export interface ContactData {
//         name: string;
//         email: string;
//         phone: string;
//     }

//     export const Outlet = (data: OutletData) => ({
//         type: Steps.Outlet,
//         data,
//         path: Paths.Outlet
//     });
//     export type Outlet = ReturnType<typeof Outlet>;

//     export interface OutletSupplyRequest {
//         requestId: number;
//         name: string;
//     }

//     export interface OutletData {
//         request: OutletSupplyRequest[];
//     }

//     export const Supply = (data: SupplyData) => ({
//         type: Steps.Supply,
//         data,
//         path: Paths.Supply
//     });
//     export type Supply = ReturnType<typeof Supply>;

//     export type SupplyData = NecessitousStep.DemandData;

//     export const Summary = (data: SummaryData) => ({
//         type: Steps.Summary,
//         data,
//         path: Paths.Summary
//     });
//     export type Summary = ReturnType<typeof Summary>;

//     export interface SummaryData {
//         comment?: string;
//         willDeliverTheSupplies: boolean;
//     }
// }

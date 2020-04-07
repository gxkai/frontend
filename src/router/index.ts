import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import {Step, Step as NecessitousStep} from "@/views/Necessitous/Step.ts";
import Necessitous from "@/views/Necessitous/Necessitous.vue";
import NecessitousContact from "@/views/Necessitous/Contact.vue";
import NecessitousDemand from "@/views/Necessitous/Demand.vue";
import NecessitousSummary from "@/views/Necessitous/Summary.vue";

import { Step as CanHelpStep } from "@/views/CanHelp/Step.ts";
import CanHelp from "@/views/CanHelp/CanHelp.vue";
import CanHelpContact from "@/views/CanHelp/Contact.vue";
import CanHelpOutlet from "@/views/CanHelp/Outlet.vue";
import CanHelpSupply from "@/views/CanHelp/Supply.vue";
import CanHelpSummary from "@/views/CanHelp/Summary.vue";

import NotFound from "@/components/NotFound.vue";
import TermsOfService from "@/components/TermsOfService.vue";
import Contact from "@/views/Contact.vue";
import OutletDetails from '@/views/OutletDetails.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: 'Pomocnicy',
            metaTags: [
                {
                    name: 'description',
                    content: 'Pomagamy placówkom medycznym w walce z COVID-19.'
                },
                {
                    property: 'og:description',
                    content: 'Pomagamy placówkom medycznym w walce z koronawirusem'
                },
                {
                    property: 'og:title',
                    content: 'Pomocnicy - pomagamy placówkom medycznym w walce z koronawirusem'
                }
            ]
        }
    },
    {
        path: "/potrzebujacy",
        name: "Necessitous",
        component: Necessitous,
        children: [
            {
                path: NecessitousStep.Paths.Contact,
                component: NecessitousContact
            },
            {
                path: NecessitousStep.Paths.Demand,
                component: NecessitousDemand
            },
            {
                path: NecessitousStep.Paths.Summary,
                component: NecessitousSummary
            }
        ]
    },
    {
        path: "/pomagajacy",
        name: "Canhelp",
        component: CanHelp,
        children: [
            {
                path: CanHelpStep.Paths.Contact,
                component: CanHelpContact
            },
            {
                path: CanHelpStep.Paths.Outlet,
                component: CanHelpOutlet
            },
            {
                path: CanHelpStep.Paths.Supply,
                component: CanHelpSupply
            },
            {
                path: CanHelpStep.Paths.Summary,
                component: CanHelpSummary
            }
        ]
    },
    {
        path: "/regulamin",
        component: TermsOfService
    },
    {
        path: "/kontakt",
        component: Contact
    },
    { 
        path: '/placowka/:id', 
        component: OutletDetails,
        meta: {
            title: 'Placówka',
            metaTags: [
                {
                    name: 'description',
                    content: 'something'
                },
            ]
        }
    },
    {
        path: "*",
        component: NotFound
    }
];

const router = new VueRouter({
    routes
});

export default router;

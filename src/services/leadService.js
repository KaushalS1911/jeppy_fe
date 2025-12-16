import apiClient from './apiClient.js';
import {mockLeads} from '../static/mockLeads.js';
import {readLeadsCache, writeLeadsCache} from './localStore.js';

function getFallbackLeads() {
    return readLeadsCache() || mockLeads;
}

function persistLeads(next) {
    writeLeadsCache(next);
    return next;
}

export async function fetchLeads(params = {}) {
    try {
        const {data} = await apiClient.get('/admin/leads', {params});
        persistLeads(data);
        return data;
    } catch (error) {
        console.warn('Falling back to mock leads. Replace with live API once available.', error);
        return getFallbackLeads();
    }
}

export async function updateLeadStatus(leadId, status) {
    try {
        const {data} = await apiClient.patch(`/admin/leads/${leadId}`, {status});
        return data;
    } catch (error) {
        const current = getFallbackLeads();
        const next = current.map((lead) => (lead.id === leadId ? {...lead, status} : lead));
        persistLeads(next);
        console.warn('Lead status saved locally. Wire real API to persist.', error);
        return next.find((lead) => lead.id === leadId);
    }
}



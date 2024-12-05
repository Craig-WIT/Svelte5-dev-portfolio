import sanityClient from '$lib/utils/sanity'
import type { PageLoad } from './$types'

export const load:PageLoad = async () => {
    const workExperience: SanityWorkExperience[] = await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');

    const rawProject: SanityProject[] = await sanityClient.fetch('*[_type == "project"]')

    const projects = rawProject.map(processProjectEntries)

    return {
        workExperience,
    };

};

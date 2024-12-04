import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
    projectId: '0kyb9lvh',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-12-04'
}

const sanityClient = createClient(config);
export default sanityClient;
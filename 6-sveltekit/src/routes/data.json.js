import data from '../../../_shared/data.json'

export async function get() {
    return {
        body: data
    }
}

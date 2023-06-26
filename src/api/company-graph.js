/** Company Competition Graph API
 * Get Graph /api/comp/surrounding
 */

const COMPANY_GRAPH_API = '/graph/api/comp/surrounding'

export async function getCompanyGraph (nodeId, expandLayers) {
  try {
    const response = await fetch(`${COMPANY_GRAPH_API}?node_id=${nodeId}&expand_number_of_layers=${expandLayers}`)
    const data = await response.json()

    if (data && data.links && data.nodes) {
      return data
    } else {
      return null
    }
  } catch (e) {
    console.error(e)
  }
}

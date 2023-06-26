// import axios from 'axios'

/** Form 10Q Itemization APIs
 *
 * 查询样本列表 GET /itemized-form/sample/list 返回一个带sample form的列表
 * 查看分割好的form GET /itemized-form/{id} 返回分割好的form的数据
 * 新建form分割任务 POST /itemization-task {"url": url} 返回任务状态和任务id
 * 查询分割任务状态 GET /itemization-task/{id}/status 返回任务状态，如果已经完成，会附带访问这个form的链接 参考HATEOAS Restful API设计
 */

const SAMPLE_LIST_API = '/api/tenk/samples'
const SAMPLE_FORM_API = '/api/tenk/sample-form'
const ITEMIZATION_FROM_URL = '/api/tenk/itemization'

// POST /itemization-task {"url": url}
export async function newItemizedFormByURL (url) {
  try {
    const response = await fetch(ITEMIZATION_FROM_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url
      })
    })

    const data = await response.json()
    console.log(data)

    if (data && data.files && data.files.html_link && data.files.json_link && data.files.text_link) {
      return data.files
    } else {
      return null
    }
  } catch (e) {
    console.error(`Failed to get item. Reason: ${e}`)
    return null
  }
}

// GET /api/samples
export async function getSampleList () {
  const response = await fetch(SAMPLE_LIST_API)
  const data = await response.json()

  if (data && (data.length > 0 || data.ticker_map)) {
    return data
  } else {
    return null
  }
}

// GET /api/form-10k/{ticker}
export async function getSample (filingName) {
  const response = await fetch(`${SAMPLE_FORM_API}?filing_name=${filingName}`)
  const data = await response.json()

  if (data) {
    return data
  } else {
    return null
  }
}

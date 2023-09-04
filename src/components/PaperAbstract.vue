<template>
  <div class="hello">
    <h3 id="Our Work" class="title-pub">Our Publication</h3>
    <el-row class="container">
      <el-col :span="24" :lg="12">
        <el-card class="card-search">
          <hr />
          <img src="@/assets/search.svg" alt="Image 1" class="image" />
          <div slot="header" class="header">
            <h3 class="project-title">Form 10-K Itemization Demo</h3>
          </div>
          <div class="project-intro">
            <h4 class="abstract">Abstract</h4>
            <p class="abstract-content">
              Form 10-K report is a financial report disclosing the annual financial state of a public company. It is an
              important evidence to conduct financial analysis. In this paper, we develop a Form 10-K Itemization system
              which can automatically segment all the Item sections in 10-K documents. The system is both effective and
              efficient. It reaches a retrieval rate of 93%.
            </p>
          </div>
          <el-button @click="$router.push({ name: '10KItemization' })" type="plain" size="small"
            class="nav-button-search nav-button-search-up-left"><span class="button-text">Try it out!</span></el-button>
        </el-card>
      </el-col>
      <el-col :span="24" :lg="12">
        <el-card class="card-search card-small">
          <hr />
          <img src="@/assets/graph.svg" alt="Image 2" class="image image-small" />
          <div slot="header" class="header">
            <h3 class="project-title">Company Competition Graph</h3>
          </div>
          <div class="project-intro">
            <h4 class="abstract">Abstract</h4>
            <p class="abstract-content">
              This study proposes a system to process financial reports and construct the public competitor graph to fill
              the void. Our method can retrieve more than 83% competition relationship of the S&P 500 index companies.
              Based on the output from our system, we construct a knowledge graph with more than 700 nodes and 1200 edges.
            </p>
          </div>
          <el-button @click="$router.push({ name: 'CompanyGraph' })" type="plain" size="small"
            class="nav-button-search nav-button-search-right"><span class="button-text">Try it out!</span></el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :span="24" :lg="12">
        <el-card class="card-search">
          <hr />
          <img src="@/assets/10Q.svg" alt="Image 3" class="image" />
          <div slot="header" class="header">
            <h3 class="project-title">Form 10-Q Itemization Demo</h3>
          </div>
          <div class="project-intro">
            <h4 class="abstract">Abstract</h4>
            <p class="abstract-content">
              The quarterly financial statement, or Form 10-Q, is one of the most frequently required filings for US
              public companies to disclose financial and other important business information. This paper presents a
              solution for itemizing 10-Q files by complementing a rule-based algorithm with a Convolutional Neural
              Network (CNN) image classifier.
            </p>
          </div>
          <el-button @click="$router.push({ name: 'TenQDemo' })" type="plain" size="small" class="nav-button-search"><span
              class="button-text">Try it out!</span></el-button>
        </el-card>
      </el-col>
      <el-col :span="24" :lg="12">
        <el-card class="card-search">
          <hr />
          <img src="@/assets/novelty.svg" alt="Image 4" class="image" />
          <div slot="header" class="header">
            <h3 class="project-title">Novelty in Finance</h3>
          </div>
          <div class="project-intro">
            <h4 class="abstract">Abstract</h4>
            <p class="abstract-content">
              Using numeric and textual data extracted from over 50,000 finance articles in SSRN during 2001--2019, we
              examine the relationship between measured qualities and a paper’s readership, eventual outlet, and impact.
              Conventionality (semantic similarity with existent research) helps boost readership and publication
              prospects.
            </p>
          </div>
          <el-button @click="$router.push({ name: 'NoveltyInFinance' })" type="plain" size="small"
            class="nav-button-search"><span class="button-text">Try it out!</span></el-button>
        </el-card>
      </el-col>
    </el-row>
    <h3 id="Projects" class="title-pro">Other Projects</h3>
    <el-row class="container">
      <el-col :lg="21" :xl="18">
        <el-card class="project-card">
          <hr />
          <div slot="header" class="header">
            <h3 class="project-title-left">Trends in Research</h3>
          </div>
          <div class="project-intro">
            <div class="intro-content">
              <div class="image-container">
                <img src="@/assets/trends.svg" alt="Image 5" class="image-square" />
              </div>
              <p class="project-content">
                The graph illustrates the trends in research, showcasing the number of papers published over a specified
                period and their corresponding percentages. It serves as a valuable tool for researchers, policymakers,
                and stakeholders in gauging the progress and impact of scholarly endeavors over time.
              </p>
              <el-button @click="$router.push({ name: 'ResearchTrend' })" type="plain" size="small"
                class="nav-button"><span class="button-text">Try it out!</span></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :lg="21" :xl="18">
        <el-card class="project-card">
          <hr />
          <div slot="header" class="header">
            <h3 class="project-title-left">Footnote Demo</h3>
          </div>
          <div class="project-intro">
            <div class="intro-content">
              <div class="image-container">
                <img src="@/assets/footnotes.svg" alt="Image 6" class="image-square" />
              </div>
              <p class="project-content">
                The footnote demo showcases instances where directors become entitled to full acceleration of vesting of
                equity awards upon retirement, based on their tenure on the board. It provides insights into the equity
                compensation practices and policies within the company and highlight specific transactions involving the
                issuance of shares subject to PRSU awards.
              </p>
              <el-button @click="$router.push({ name: 'Footnote' })" type="plain" size="small" class="nav-button"><span
                  class="button-text">Try it out!</span></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :lg="21" :xl="18">
        <el-card class="project-card">
          <hr />
          <div slot="header" class="header">
            <h3 class="project-title-left">Sample Research Demo</h3>
          </div>
          <div class="project-intro">
            <div class="intro-content">
              <div class="image-container">
                <img src="@/assets/research.svg" alt="Image 7" class="image-square" />
              </div>
              <p class="project-content">
                The sample research demo provides a glimpse into ongoing research activities and highlights a selection
                of projects from a diverse range of fields. It serves as a valuable resource for gaining insights into
                the current trends and areas of focus within the research community.
              </p>
              <el-button @click="$router.push({ name: 'ResearchDemo' })" type="plain" size="small"
                class="nav-button"><span class="button-text">Try it out!</span></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :lg="21" :xl="18">
        <el-card class="project-card">
          <hr />
          <div slot="header" class="header">
            <h3 class="project-title-left">Itemized 10K Search Demo (Postgreql)</h3>
          </div>
          <div class="project-intro">
            <div class="intro-content">
              <div class="image-container">
                <img src="@/assets/itemized.svg" alt="Image 8" class="image-square" />
              </div>
              <p class="project-content">
                The 10K Itemization Demo (PostgreSQL) showcases sample entries that represents a specific company's
                filing details extracted from the Form 10-K, a comprehensive annual report filed by public companies in
                the United States. The demo provides key information such as the CIK (Central Index Key) code, company
                name, filing date, form type, and the specific item addressed in each entry.
              </p>
              <el-button @click="$router.push({ name: '10KSearchPg' })" type="plain" size="small" class="nav-button"><span
                  class="button-text">Try it out!</span></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :lg="21" :xl="18">
        <el-card class="project-card">
          <hr />
          <div slot="header" class="header">
            <h3 class="project-title-left">Itemized 10K Search Demo (SQLite)</h3>
          </div>
          <div class="project-intro">
            <div class="intro-content">
              <div class="image-container">
                <img src="@/assets/sqllite.svg" alt="Image 9" class="image-square" />
              </div>
              <p class="project-content">
                The 10K Itemization Demo provides a specific entry from the dataset, featuring details about a company
                named Detonics Small Arms Ltd. This entry corresponds to their filing on Form 10-K/A, which is an
                amendment to the annual report, and is dated January 5, 2010. The entry is categorized under ITEM 9A,
                which typically pertains to disclosures related to controls and procedures.
              </p>
              <el-button @click="$router.push({ name: '10KSearch' })" type="plain" size="small" class="nav-button button-small"><span
                  class="button-text">Try it out!</span></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'PaperAbstract'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 50px;
  width: 100%;
  height: 100%;
  position: inherit;
}

.intro-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-content {
  text-align: justify;
  margin-top: 2%;
  margin-left: 4%;
}

.image-container {
  margin-right: 10px;
  display: flex;
  align-items: flex-start;
  margin-left: -20px;
  width: 80px;
  height: 80px;
}

.button-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 0.8rem;
}

.title-pub {
  margin-top: 20px;
  margin-bottom: 2%;
  text-align: center;
  font-size: 1.8rem;
  color: rgb(253, 253, 253);
}

.title-pro {
  margin-top: 70px;
  font-size: 1.8rem;
  color: rgb(253, 253, 253);
  position: relative;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: center;
}

.abstract-content {
  margin-left: 10px;
  margin-right: 10px;
  height: 160px;
  object-fit: contain;
  font-size: 0.9rem;
  text-overflow: ellipsis;
}

img.image {
  width: 287px;
  height: 120px;
  object-fit: contain;
  margin-top: 5px;
}

img.image-square {
  width: 80px;
  height: 80px;
  margin-left: 20px;
  object-fit: cover;
}

.header {
  margin: 0px;
  text-align: center;
  inline-size: 300px;
  display: inline;
  text-overflow: ellipsis;
}

.card-search {
  transition: box-shadow .3s;
  margin-top: 20px;
  padding-top: 1%;
  width: 85%;
  height: 95%;
  object-fit: contain;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  position: relative;
  display: inline-block;
}

.project-card {
  transition: box-shadow .3s;
  margin-top: 20px;
  padding-bottom: 1%;
  object-fit: contain;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  position: relative;
  display: inline-block;
  align-items: center;
}

.project-intro {
  text-align: left;
  margin-top: 2%;
  margin-bottom: 10px;
}

.nav-button-search {
  font-size: 0.5em;
  width: 95%;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.847);
  color: white;
  border-radius: 10px;
  display: inline-block;
  bottom: 0px;
}

.nav-button {
  margin-left: 5%;
  background-color: rgba(0, 0, 0, 0.847);
  color: white;
  border-radius: 10px;
  object-fit: contain;
}

.project-title {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 5px 0 5px 0;
  margin-bottom: -20px;
  margin-left: -10px;
  justify-content: center;
  object-fit: contain;
  text-overflow: ellipsis;
}

.project-title-left {
  font-size: 1.2em;
  font-weight: bold;
  margin: 5px 0 5px 0;
  margin-bottom: -23px;
  text-align: left !important;
}

.abstract {
  margin: 0px;
  margin-left: 10px;
  font-size: 1.2rem;
}

@media (max-width: 1200px) {
  img.image {
    width: 200px;
    height: 120px;
    object-fit: contain;
    margin-top: 5px;
  }

  .project-title {
    font-size: 1.1rem !important;
  }

  .abstract {
    font-size: 0.9rem !important;
  }

  .abstract-content {
    font-size: 0.8rem !important;
  }
}

@media (max-width: 960px) {
  img.image {
    width: 180px;
    height: 120px;
    object-fit: contain;
    margin-top: 5px;
  }

  .project-title {
    font-size: 0.9rem !important;
  }

  .abstract {
    font-size: 1rem !important;
  }

  .abstract-content {
    font-size: 0.75rem !important;
  }
}

@media (max-width: 890px){
  .abstract-content {
    font-size: 0.65rem !important;
  }
}

@media (max-width: 850px) {
  .image-square {
    display: none;
  }

  .button-text {
    font-size: 0.3rem;
  }

  .container {
      display: block; /* Show the el-col elements in a single column */
  }

  .abstract-content{
    font-size: 0.8rem !important;
    height: 100%;
  }

  // img.image{
  //   display: none;
  // }

  .image-container {
    display: none;
  }

  .nav-button {
    margin-top: 0%;
  }

  .project-content {
    margin-left: 0%;
  }

  .title-pro {
    font-size: 1.4rem;
  }

  .title-pub {
    font-size: 1.4rem;
  }

  .project-title-left {
    font-size: 1.0rem !important;
  }

  .abstract {
    font-size: 0.9rem !important;
  }

  .intro-content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
}

p {
  text-align: left;
  font-size: 12px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-align: left;
  display: block;
}

button {
  position: relative;
  margin-top: 5%;
}

button span b {
  font-size: 1.1vw;
}</style>

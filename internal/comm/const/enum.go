package consts

type AnalyzerType string

const (
	Rasa    AnalyzerType = "rasa"
	Pattern AnalyzerType = "pattern"
)

func (e AnalyzerType) ToString() string {
	return string(e)
}

type AgentStatus string

const (
	AgentBusy  AgentStatus = "busy"
	AgentReady AgentStatus = "ready"
)

func (e AgentStatus) ToString() string {
	return string(e)
}

type SeleniumOpt string

const (
	Navigation SeleniumOpt = "navigation"
)

func (e SeleniumOpt) ToString() string {
	return string(e)
}

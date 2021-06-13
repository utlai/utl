package model

type NluSynonym struct {
	BaseModel

	//Code  string           `json:"code"`
	Name  string           `json:"name"`
	Items []NluSynonymItem `json:"items" gorm:"-"`

	ProjectId uint `json:"projectId"`
}
type NluSynonymItem struct {
	BaseModel

	Content   string `json:"content"`
	SynonymId uint   `json:"synonymId"`
}

func (NluSynonym) TableName() string {
	return "nlu_synonym"
}
func (NluSynonymItem) TableName() string {
	return "nlu_synonym_item"
}

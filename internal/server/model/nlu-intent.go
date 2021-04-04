package model

type NluIntent struct {
	BaseModel

	Name  string    `json:"name"`
	Sents []NluSent `json:"sents" gorm:"-"`
}

type NluSent struct {
	BaseModel

	Content string    `json:"content"`
	Slots   []NluSlot `json:"slots" gorm:"-"`

	IntentId uint `json:"intentId"`
}

type NluSlot struct {
	BaseModel

	Name   string `json:"name"`
	Entity string `json:"entity"`
	Value  string `json:"value"`

	SentId uint `json:"sentId"`
}

func (NluIntent) TableName() string {
	return "nlu_intent"
}
func (NluSent) TableName() string {
	return "nlu_sent"
}
func (NluSlot) TableName() string {
	return "nlu_slot"
}

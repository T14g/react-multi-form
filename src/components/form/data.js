export const _INPUTS = [
    {
        'id' : 'sel-util',
        'options' : [
            {'title' : 'Passeio' , 'value' : 'passeio'},
            {'title' : 'Profissional', 'value' : 'profissional'},
            {'title' : 'Aplicativo', 'value' : 'aplicativo'}
            ],
        'placeholder' : 'Utilização'
    },
    {
        'id' : 'sel-tipo-casa',
        'options' : [
            {'title' : 'Alvernaria' , 'value' : 'alvenaria'},
            {'title' : 'Madeira', 'value' : 'madeira'}
            ],
        'placeholder' : 'Tipo de construção'
    },
    {
        'id' : 'sel-util-2',
        'options' : [
            {'title' : 'Habitual' , 'value' : 'habitual'},
            {'title' : 'Veraneio', 'value' : 'veraneio'}
            ],
        'placeholder' : 'Utilização'
    },
    {
        'id' : 'sel-tipo-casa-2',
        'options' : [
            {'title' : 'Vertical' , 'value' : 'vertical'},
            {'title' : 'Horizontal', 'value' : 'horizontal'}
            ],
        'placeholder' : 'Tipo de construção'
    },
    {
        'id' : 'sel-aniversarios',
        'options' : [
            {'title' : '2' , 'value' : '2'},
            {'title' : '3' , 'value' : '3'},
            {'title' : '4' , 'value' : '4'},
            {'title' : '5' , 'value' : '5'},
            {'title' : '6' , 'value' : '6'},
            {'title' : '7' , 'value' : '7'},
            {'title' : '8' , 'value' : '8'},
            {'title' : '9' , 'value' : '9'},
            {'title' : '10' , 'value' : '10'},
            {'title' : 'Mais de 10' , 'value' : 'more'},
            ],
        'placeholder' : 'Total de datas de nascimento segurados'
    },
    {
        'id' : 'textarea-aniversarios',
        'label' : 'Datas de nascimento',
        'placeholder' : '10/10/1994; 11/11/1993...etc',
    },
    {
        'id': '1',
        'type': 'text',
        'placeholder': 'Nome',
        'name': 'nome',
        'required': true
    },
    {
        'id': '2',
        'type': 'tel',
        'name': 'cel-whats',
        'placeholder': 'Celular/Whatsapp',
        'required': true
    },
    {
        'id': '3',
        'type': 'email',
        'name': 'email',
        'placeholder': 'Email',
        'required': false
    },
    {
        'id': '4',
        'type': 'text',
        'name': 'cpf-cnpj',
        'placeholder': 'CPF/CNPJ',
        'required': true
    },
    {
        'id': '5',
        'type': 'date',
        'name': 'aniversario',
        'placeholder': 'Data de nascimento',
        'required': true
    },
    {
        'id': '6',
        'type': 'text',
        'name': 'cep',
        'placeholder': 'CEP',
        'required': true
    },
    {
        'id': '7',
        'type': 'text',
        'name': 'placa-carro',
        'placeholder': 'Placa',
        'required': true
    },
    {
        'id': '8',
        'type': 'text',
        'name': 'chassi-carro',
        'placeholder': 'Chassi',
        'required': true
    },
    {
        'id': '9',
        'type': 'text',
        'name': 'veiculo',
        'placeholder': 'Veículo',
        'required': true
    },
    {
        'id': '10',
        'type': 'text',
        'name': 'observacao',
        'placeholder': 'Observação',
        'required': true
    },
    {
        'id': '11',
        'type': 'text',
        'name': 'valor-construcao',
        'placeholder': 'Valor construção',
        'required': true
    },
    {
        'id': '12',
        'type': 'text',
        'name': 'ramo',
        'placeholder': 'Ramo',
        'required': true
    }
];

export const _SELECT_OPTIONS = {
    'automovel': {
        'title': 'Automóvel',
        'rows': [
            ['renew'],
            ['1', '2'],
            ['3', '4'],
            ['5', '6'],
            ['7', '8'],
            ['sel-util']
        ]
    },
    'residencial': {
        'title': 'Residencial',
        'rows': [
            ['renew'],
            ['1', '2'],
            ['3', '4'],
            ['sel-tipo-casa', 'sel-util-2'],
            ['6', '11'],
        ]
    },
    'empresarial': {
        'title': 'Empresarial',
        'rows': [
            ['renew'],
            ['1', '2'],
            ['3', '4'],
            ['6', '11'],
            ['12'],
        ]
    },
    'condominio': {
        'title': 'Condomínio',
        'rows': [
            ['renew'],
            ['1', '2'],
            ['3', '4'],
            ['sel-tipo-casa-2', '6'],
            ['11'],
        ]
    },
    'plano-saude': {
        'title': 'Plano de saúde',
        'rows': [
            ['renew'],
            ['1', '2'],
            ['3', '4'],
            ['6', '12'],
            ['sel-aniversarios'],
            ['textarea-aniversarios']
        ]
    },
    'plano-dental': {
        'title': 'Plano dental',
        'rows': [
            []
        ]
    },
    'vida-grupo': {
        'title': 'Vida em grupo',
        'rows': [
            []
        ]
    },
    'vida-individual': {
        'title': 'Vida individual',
        'rows': [
            []
        ]
    },
    'outros': {
        'title': 'Outros',
        'rows': [
            []
        ]
    }
};
import copy


class SwitchCaseTypescriptGen:
    
    def __init__(self):
        pass
    
    def _preprocess(self, switch_case_schemas):
        pass
    
    def _genSLSwitchCases(self, switch_case_schemas, function_prefix="", function_suffix="", call_path = "", pathparams="", parameter="request"):
        for schema in switch_case_schemas['schemas']:
            print(f"case `{call_path}{schema['apitablename'].lower()}{pathparams}`:")
            print(f' return {function_prefix}{schema["apitablename"]}{function_suffix}({parameter});')
        
    def genSLSwitchCases(self, schemas):
        switch_case_schemas = copy.deepcopy(schemas)
        self._preprocess(switch_case_schemas)
        self._genSLSwitchCases(switch_case_schemas, function_prefix='post')
        self._genSLSwitchCases(switch_case_schemas, function_prefix='put')
        self._genSLSwitchCases(switch_case_schemas, function_prefix='put', function_suffix="_admin", call_path='admin/')

        print("-"*100)
        print("GET")
        self._genSLSwitchCases(switch_case_schemas, function_prefix='get', pathparams="/${id}")
        self._genSLSwitchCases(switch_case_schemas, function_prefix='get', function_suffix="_admin", call_path='admin/', pathparams="/${id}", parameter="id")

        
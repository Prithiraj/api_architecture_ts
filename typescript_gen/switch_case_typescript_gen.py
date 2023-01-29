import copy


class SwitchCaseTypescriptGen:
    
    def __init__(self):
        pass
    
    def _preprocess(self, switch_case_schemas):
        pass
    
    def _genSLSwitchCases(self, switch_case_schemas, function_prefix=None, call_path = ""):
        for schema in switch_case_schemas['schemas']:
            print(f"case '{call_path}/{schema['apitablename'].lower()}':")
            print(f' return {function_prefix}{schema["apitablename"]}(request);')
        
    def genSLSwitchCases(self, schemas):
        switch_case_schemas = copy.deepcopy(schemas)
        self._preprocess(switch_case_schemas)
        self._genSLSwitchCases(switch_case_schemas, function_prefix='post')
        self._genSLSwitchCases(switch_case_schemas, function_prefix='put')
        self._genSLSwitchCases(switch_case_schemas, function_prefix='put', call_path='admin')

        